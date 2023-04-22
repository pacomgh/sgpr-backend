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
myCollection = config.db["BOT"]
def read_bots():
    result = myCollection.find()
    for bot in result:
        print(bot)
    return result

def read_bot():
    result = myCollection.find_one()
    print(result)
    return result
