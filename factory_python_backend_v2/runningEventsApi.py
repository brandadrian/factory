import json
from flask import Flask, request
from mongoDbAccess import mongoDbAccess

app = Flask(__name__)

@app.route('/running-event')
def get():
    return runningEventDbAccess.readAll()

@app.route('/running-event/<id>')
def getById(id):
    return runningEventDbAccess.readById(id)

@app.route('/running-event', methods=['POST'])
def post():
    request_data = request.get_json()
    runningEventDbAccess.save(request_data)
    return ('', 200)

@app.route('/running-event/<id>', methods=['PUT'])
def put(id):
    request_data = request.get_json()
    runningEventDbAccess.update(id, request_data)
    return ('', 200)

@app.route('/running-event/<id>', methods=['DELETE'])
def delete(id):
    runningEventDbAccess.delete(id)
    return ('', 200)

if __name__ == '__main__':
    with open('config.json') as data_file:
        data = json.load(data_file)
        port = data["flask_port"]
        connectionString = data["mongo_db_connection"]
        collectionRunningEvent = data["mongo_db_collection_running_event"]
        dbName = data["mongo_db_name"]
    
    runningEventDbAccess = mongoDbAccess(connectionString, collectionRunningEvent, dbName)
    app.run('', port)
    
