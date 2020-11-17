import os
import json
from pymongo import MongoClient
from flask import Flask, request
from bson.objectid import ObjectId
from dataAccess import dataAccess

app = Flask(__name__)

@app.route('/running-event')
def get():
    documents = dataAccess.readAll()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)

@app.route('/running-event', methods=['POST'])
def post():
    dataAccess.save(req_data)
    return ('', 200)

@app.route('/running-event/<id>', methods=['DELETE'])
def delete(id):
    dataAccess.delete(id)
    return ('', 200)

if __name__ == '__main__':
    with open('config.json') as data_file:
        data = json.load(data_file)
        port = data["flask_port"]
    app.run('', port)

