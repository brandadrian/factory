import json
from pymongo import MongoClient

class dataAccess:
    def getCollection():
        with open('config.json') as data_file:
            data = json.load(data_file)
            mongo_db_connection = data["mongo_db_connection"]
        
        client = MongoClient(mongo_db_connection)
        db = client["mongo_db_name"]
        collection = db["mongo_db_collection"]
        return collection
    
    def save(document):
        collection = getCollection()
        collection.insert_one(document)
    
    def readAll():
        collection = getCollection()
        return collection.find()
    
    def delete(id):
        collection = getCollection(self)
        collection.delete_one({"_id": ObjectId(id)})  
 
