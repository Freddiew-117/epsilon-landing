import { useState, useEffect } from 'react'
import { useWebSocket } from '../hooks/useWebSocket'
import { mockOrderbook, mockTrades } from '../services/mockData'

export function OrderbookMock() {
  const { data } = useWebSocket('mock://ws')
  const [orderbook, setOrderbook] = useState(mockOrderbook)
  const [trades, setTrades] = useState(mockTrades)

  useEffect(() => {
    if (data?.orderbook) {
      setOrderbook(data.orderbook)
    }
    if (data?.trades) {
      setTrades(data.trades.slice(0, 10))
    }
  }, [data])

  return (
    <div className="bg-space-light rounded-xl p-6 border border-gray-800">
      <h4 className="text-lg font-semibold mb-4 text-white">Real-Time Orderbook</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Asks */}
        <div>
          <div className="text-sm font-medium text-red-400 mb-2">Asks</div>
          <div className="space-y-1">
            {orderbook.asks.slice(0, 5).map((ask, index) => (
              <div
                key={index}
                className="flex justify-between text-sm font-mono"
              >
                <span className="text-red-400">{ask.price}</span>
                <span className="text-gray-300">{ask.size}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bids */}
        <div>
          <div className="text-sm font-medium text-green-400 mb-2">Bids</div>
          <div className="space-y-1">
            {orderbook.bids.slice(0, 5).map((bid, index) => (
              <div
                key={index}
                className="flex justify-between text-sm font-mono"
              >
                <span className="text-green-400">{bid.price}</span>
                <span className="text-gray-300">{bid.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mb-4">
        Spread: {orderbook.spread.toFixed(2)}
      </div>

      {/* Recent Trades */}
      <div>
        <div className="text-sm font-medium text-gray-400 mb-2">Recent Trades</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {trades.map((trade, index) => (
            <div
              key={index}
              className="flex justify-between text-xs font-mono"
            >
              <span className={trade.side === 'buy' ? 'text-green-400' : 'text-red-400'}>
                {trade.price}
              </span>
              <span className="text-gray-400">{trade.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

