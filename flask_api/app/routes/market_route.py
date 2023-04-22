from flask import Flask, request, jsonify

import sys
import os
controllers = os.path.abspath("database/controllers")
sys.path.append(controllers)
from controllers import market_controller

nav = [
    {"name": "Listar Todos", "url": "/api/markets"},
    {"name": "Contacto ID 1", "url": "/api/markets/1"},
]

# app = Flask(__name__)
# @app.route('/markets', methods=('GET', 'POST'))
def markets():
    if request.method == 'GET':
        markets = market.read_markets()
        if len(markets) > 0:
            for market in markets:
                print(market)
    # todo agregar los demas metodos crud
    # if request.method == 'POST':

# @app.route('/markets/<int:id>', methods=('GET', 'POST'))
def single_market(id):
    if request.method == 'GET':
        for market in market_list:
            if market['id'] == id:
                return jsonify(market)
            pass
    if request.method == 'PUT':
        for market in market_list:
            if market['id'] == id:
                market['exchange_id'] = request.form['exchange_id']
                #esto se hace para todos los campos
                updated_market = {
                    #asi para todos los campos
                    'exchange_id': market['exchange_id']
                }
                #ver como se hace la actualizacion en mongo
                return jsonify(updated_market)
    if request.method == 'DELETE':
        for index, market in enumerate(market_list):
            if market['exchange_id'] == exchange_id:
                #ver como se elimina en mongo
                market_list.pop(index)
                return jsonify(market_list)

