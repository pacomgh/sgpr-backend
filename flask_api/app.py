# from flask import Flask

# import sys
# import os
# controllers = os.path.abspath("app/controllers")
# sys.path.append(controllers)
# import market_controller
# import bot_controller
# import balance_controller

# app = Flask(__name__)



# @app.route('/markets', methods=('GET', 'POST'))
# def marketRoute():
#     print('Hello world!')
#     # market_controller.read_markets()
#     market_controller.read_markets()
#     return {'message': 'sucess request'}

# @app.route('/bots', methods=('GET', 'POST'))
# def botRoute():
#     print('Hello world!')
#     bot_controller.read_bots()

# @app.route('/balances', methods=('GET', 'POST'))
# def balancesRoute():
#     print('Hello world!')
#     balance_controller.read_balance()

from . import app

if __name__ == '__main__':
    app.run(debug=True)
