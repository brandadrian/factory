import json
from pymongo import MongoClient

class dataAccess:
   
    def save(document):
        with open('config.json') as data_file:
            data = json.load(data_file)
            connection = data["mongo_db_connection"]
            collectionName = data["mongo_db_collection"]
            dbName = data["mongo_db_name"]
    
        client = MongoClient(connection)
        db = client[dbName]
        collection = db[collectionName]
        collection.insert_one(document)
    
    def readAll():
        with open('config.json') as data_file:
            data = json.load(data_file)
            connection = data["mongo_db_connection"]
            collectionName = data["mongo_db_collection"]
            dbName = data["mongo_db_name"]
    
        client = MongoClient(connection)
        db = client[dbName]
        collection = db[collectionName]
        return collection.find()
    
    def delete(id):
        with open('config.json') as data_file:
            data = json.load(data_file)
            connection = data["mongo_db_connection"]
            collectionName = data["mongo_db_collection"]
            dbName = data["mongo_db_name"]
    
        client = MongoClient(connection)
        db = client[dbName]
        collection = db[collectionName]
        collection.delete_one({"_id": ObjectId(id)})  
 
