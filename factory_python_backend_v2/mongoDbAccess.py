import json
from pymongo import MongoClient
from bson.objectid import ObjectId

class mongoDbAccess:

    #databaseName e.g "my-mongo-db"
    #collectionName e.g. "my-mongo-db-collection"
    #connectionString e.g. "mongodb+srv://<username>:<pwd>@cluster0.srbj2.mongodb.net/mongo-db-name?retryWrites=true&w=majority"
    def __init__(self, connectionString, collectionName, databaseName):
        client = MongoClient(connectionString)
        db = client[databaseName]
        self.collection = db[collectionName]
   
    def save(self, document):
        self.collection.insert_one(document)
    
    def readAll(self):
        documents = self.collection.find()
        response = []
        for document in documents:
            document['_id'] = str(document['_id'])
            response.append(document)
        return json.dumps(response)
    
    def readById(self, id):
        document = self.collection.find_one({"_id": ObjectId(id)})
        #document['_id'] = str(document['_id'])
        return json.dumps(str(document))

    def delete(self, id):
        self.collection.delete_one({"_id": ObjectId(id)})  


