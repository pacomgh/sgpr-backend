from flask import Blueprint, request, jsonify, redirect, url_for

from ..controllers import market_controller
from ..models.market_model import Market

api_scope = Blueprint('api', __name__)

@api_scope.route('/markets', methods=['GET'])
def get_market():
    market_list = market_controller.read_markets()
    market_dict = [Market._asdict() for market in market_list]

    return jsonify(market_dict)

@api_scope.route('/markets/<param>', methods=['GET'])
def get_market_detail(param):
    market = Market(id=param)
    # pasar como parametro el market
    market_new = market_controller.read_market()

    return jsonify(market_new._asdict())

@api_scope.route('/markets', methods=['POST'])
def create():
    data=request.form
    print(data)
    market = Market(exchange_id=data['exchange_id'], symbol=data['symbol'], precision=data['precision'], 
                    id=data['id'], type=data['type'], minNotional=data['minNotional'] )
    market_controller.insertData(market)

@api_scope.route('/markets/<id_>', methods=['PUT'])
def update(id_):
    data=request.data
    print(data)
    market = Market(exchange_id=data['exchange_id'], symbol=data['symbol'], precision=data['precision'], 
                    id=id_, type=data['type'], minNotional=data['minNotional'] )
    new_market = market_controller.updateDocument(market)

    return jsonify(new_market._asdict())

@api_scope.route('/markets/<id_>', methods=['DELETE'])
def delete(id_):
    market = Market(id=id_)

    contact_new = market_controller.deleteData(market)

    return jsonify(contact_new._asdict())