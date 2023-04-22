import sys
import os
configModule = os.path.abspath("./config")
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
myCollection = config.db["BALANCE"]

def read_balances():
    result = myCollection.find()
    for balance in result:
        print(balance)
    return result

def read_balance():
    result = myCollection.find_one()
    print(result)
    return result