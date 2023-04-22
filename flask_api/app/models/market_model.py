from typing import NamedTuple, Optional

class Market(NamedTuple):
    _id: str = None
    exchange_id: str = None
    symbol: str = None
    precision: object = None
    type: str = None
    id: str = None
    minNotional: int = None