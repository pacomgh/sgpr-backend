import sys
import os
from bson.objectid import ObjectId
configModule = os.path.abspath("./database/config")
sys.path.append(configModule)
from backend.flask_api import config
#query
# market = {"name": "nombre mercado", "date": "11/04/2023"}
# result = myCollection.insert(market)
# print(result)

# def insertData():
#     data = {}
#     result = myCollection.insert_one(data)
#     print(result)
myCollection = config.db["MARKET"]

def read_markets():
    result = myCollection.find()
    for market in result:
        print(market)
    return result

def read_market():
    # todo parametrizar esta funcion
    result = myCollection.find_one()
    print(result)
    return result

def insertData(data):
    myMarket = data
    result = myCollection.insert_one(myMarket)
    return result

def queryData():
    # todo parametrizar esta funcion
    query = {'exchange_id': 'ftx'}
    result = myCollection.find(query)
    for market in result:
        print(market)

def findOneDocument():
    # todo parametrizar esta funcion
    query = {'exchange_id': 'ftx'}
    result = myCollection.find_one(query)
    # for market in result:
    #     print(market)
    print(result)

def findById():
    # todo parametrizar esta funcion
    query = {'_id': ObjectId('6344dafb8211fb282a41d1dc')}
    result = myCollection.find_one(query)
    # for market in result:
    #     print(market)
    print(result)

def updateDocument(data):
    #seleccionar el parametro con el que vamos a actualizar
    # query = {'_id': ObjectId('6344dafb8211fb282a41d1dc')}
    query = data
    # dos criuterios de busqueda, el que se va aactualizar y el diccoinario
    #se agregan todos los valores a actualizar si es necesario
    newValues = {'$set':{'exchange_id': data['exchange_id'], 'symbol':data['symbol'], 'precision':data['precision'], 
                    'id':data['id'], 'type':data['type'], 'minNotional':data['minNotional']}}
    result = myCollection.update_one(query, newValues)
    # for market in result:
    #     print(market)
    print(result)

def deleteData(market):
    #seleccionar el parametro con el que vamos a actualizar
    query = {'_id': ObjectId('6344dafb8211fb282a41d1dc')}
    result = myCollection.delete_one(query)
    print(result)
