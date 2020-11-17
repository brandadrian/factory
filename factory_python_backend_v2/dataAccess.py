import json
from pymongo import MongoClient

class dataAccess:
   
    def save(document):
        collection = getCollection()
        collection.insert_one(document)
    
    def readAll():
        collection = getCollection()
        return collection.find()
    
    def delete(id):
        collection = getCollection()
        collection.delete_one({"_id": ObjectId(id)})  

def getCollection():
    with open('config.json') as data_file:
        data = json.load(data_file)
        connection = data["mongo_db_connection"]
        collectionName = data["mongo_db_collection"]
        dbName = data["mongo_db_name"]
    
    client = MongoClient(connection)
    db = client[dbName]
    collection = db[collectionName]
    return collection
