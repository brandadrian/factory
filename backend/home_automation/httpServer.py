###########################################
#Python service for brand-api
#Autho: Adrian Brand
#Descripion:
#Web service to connect to home automation
###########################################

from http.server import HTTPServer, BaseHTTPRequestHandler
from datetime import datetime
import json
import ssl
import requests
import configparser 

LOG_SHELLY = "shellyLog.txt"
LOG_SERVER = "httpServerLog.txt"

CONFIG_PORT = 'port'
CONFIG_SHELLY_1_URL = "shelly1-url"
CONFIG_SHELLY_2_URL = "shelly2-url"
CONFIG_SHELLYRELAY0 = 'shelly-relay0'
CONFIG_SHELLYAUTHORIZATION = 'shelly-authorization-token'
CONFIG_APIAUTHORIZATION = 'api-authorization-token'

class requestHandler(BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', '*')
        self.send_header('Access-Control-Allow-Headers', '*')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()
        
    ###GET
    def do_GET(self):
        log_server('GET; ' + self.path + '; IP; ' + self.client_address[0])

        try:
            config = getConfig()
            isAuthenticated = self.headers.get('Authorization') == 'Basic ' + config[CONFIG_APIAUTHORIZATION]

            if (self.path.endswith('/home-automation/shelly-log')):
                f=open(LOG_SHELLY, "r")
                logLines = f.readlines()
                logLines.reverse()
                f.close() 
                send_response(self, logLines, 200)

            elif (self.path.endswith('/home-automation/shelly-log/shelly2/sw-on')):
                log_shelly('Shelly2; SW-ON')
                send_response(self, "Log set", 200)

            elif (self.path.endswith('/home-automation/shelly-log/shelly2/sw-off')):
                log_shelly('Shelly2; SW-OFF')
                send_response(self, "Log set", 200)

            elif (self.path.endswith('/home-automation/shelly/1/relay/0')):
                if (isAuthenticated):
                    request = requests.get(config[CONFIG_SHELLY_1_URL] + config[CONFIG_SHELLYRELAY0], headers={'Authorization': 'Basic ' + config[CONFIG_SHELLYAUTHORIZATION]})
                    send_response(self, request.text, 200)
                else:
                    send_response(self, 'not authenticated for shelly', 401)

            elif (self.path.endswith('/home-automation/shelly/1/relay/0/button')):
                if (isAuthenticated):
                    request = requests.get(config[CONFIG_SHELLY_1_URL] + config[CONFIG_SHELLYRELAY0 ] + '?turn=on', headers={'Authorization': 'Basic ' + config[CONFIG_SHELLYAUTHORIZATION]})
                    request = requests.get(config[CONFIG_SHELLY_1_URL] + config[CONFIG_SHELLYRELAY0] + '?turn=off', headers={'Authorization': 'Basic ' + config[CONFIG_SHELLYAUTHORIZATION]})
                    send_response(self, request.text, 200)
                else:
                    send_response(self, 'not authenticated for shelly', 401)

            elif (self.path.endswith('/home-automation/shelly/2/relay/0')):
                if (isAuthenticated):
                    request = requests.get(config[CONFIG_SHELLY_2_URL] + config[CONFIG_SHELLYRELAY0], headers={'Authorization': 'Basic ' + config[CONFIG_SHELLYAUTHORIZATION]})
                    send_response(self, request.text, 200)
                else:
                    send_response(self, 'not authenticated for shelly', 401)

            elif (self.path.endswith('/server-state')):
                send_response(self, 'server running', 200)

            elif (self.path.endswith('/status')):
                f=open(LOG_SERVER, "r")
                logLines = f.readlines()
                logLines.reverse()
                f.close() 
                send_response(self, logLines, 200)

            else:
                self.send_response(404)                
        except:
            error =  sys.exc_info()[0]
            log_server("Unexpected error; " + error)
            print("Unexpected error:", error)
            self.send_response(500)
            self.end_headers()   
            
    ###POST
    def do_POST(self):
        log_server('POST; ' + self.path + '; IP; ' + self.client_address[0])
        try:
            if (self.path.endswith('/home-automation/shelly-log')):
                content_len = int(self.headers.get('Content-Length'))
                post_body = self.rfile.read(content_len)
                self.send_response(200)
                log_shelly(post_body.decode('UTF-8'))

            else:
                self.send_response(404)
            self.end_headers()
        except:
            error =  sys.exc_info()[0]
            print("Unexpected error:", error)
            self.send_response(500)
            self.end_headers()
            
def serve():
    PORT = int(getConfig()[CONFIG_PORT])
    server_address = ('', PORT)
    server = HTTPServer(server_address, requestHandler)
    print('Server running on port: ', PORT)
    log_server('server started on port: ' + str(PORT))
    server.serve_forever()

def log_shelly(message):
    log_internal(message, LOG_SHELLY)

def log_server(message):
    log_internal(message, LOG_SERVER)

def log_internal(message, fileName):
    dateTimeObj = datetime.now()
    messageInternal = dateTimeObj.strftime("%d/%m/%Y %H:%M:%S") + "; " + message + '\n'
    f = open(fileName, "a")
    f.write(messageInternal)
    f.close()

def getConfig():
    config = configparser.RawConfigParser()
    config.read('config.txt')
    return dict(config.items('server-config'))
    
def send_response(self, message, code):
    self.send_response(code)
    self.send_header('Content-type', 'application/json')
    self.send_header('Access-Control-Allow-Origin', '*')
    self.send_header('Access-Control-Allow-Credentials', 'true')
    self.send_header('Access-Control-Allow-Headers', '*')
    
    self.end_headers()
    self.wfile.write(json.dumps({'message': message}).encode('utf-8'))

serve()
