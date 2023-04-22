import pymongo
import json


class Config:
    #creamos la conexion
    #importacion de la variable de conexion
    myClient = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
    db = myClient["SCX_LOCAL"]#base de datos a donde nos queremos conectar
    # myCollection = db["MARKET"]#coleccion a la que queremos hacer el crud

#query
# market = {"name": "nombre mercado", "date": "11/04/2023"}
# result = myCollection.insert(market)
# print(result)

# def insertData():
#     data = {}
#     result = myCollection.insert_one(data)
#     print(result)

# def read_markets():
#     result = myCollection.find()
#     for market in result:
#         print(market)
#     return result

# def read_market():
#     result = myCollection.find_one()
#     print(result)
#     return result
