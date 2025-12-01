import { useState, useEffect } from 'react'
import { useWebSocket } from '../hooks/useWebSocket'
import { mockPositions } from '../services/mockData'

export function PositionsMock() {
  const { data } = useWebSocket('mock://ws')
  const [positions, setPositions] = useState(mockPositions)

  useEffect(() => {
    if (data?.positions) {
      setPositions(data.positions)
    }
  }, [data])

  return (
    <div className="bg-space-light rounded-xl p-6 border border-gray-800">
      <h4 className="text-lg font-semibold mb-4 text-white">Open Positions</h4>
      
      <div className="space-y-4">
        {positions.map((position) => (
          <div
            key={position.id || position.symbol}
            className="bg-space-darker rounded-lg p-4 border border-gray-800"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold text-white">{position.symbol}</div>
                <div className="text-sm text-gray-400">
                  {position.side.toUpperCase()} • {position.leverage}
                </div>
              </div>
              <div className={`text-right ${parseFloat(position.pnl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                <div className="font-semibold">
                  {parseFloat(position.pnl) >= 0 ? '+' : ''}{position.pnl}
                </div>
                <div className="text-sm">
                  {parseFloat(position.pnlPercent) >= 0 ? '+' : ''}{position.pnlPercent}%
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm mt-3 pt-3 border-t border-gray-800">
              <div>
                <span className="text-gray-500">Size:</span>
                <span className="text-gray-300 ml-2">{position.size}</span>
              </div>
              <div>
                <span className="text-gray-500">Entry:</span>
                <span className="text-gray-300 ml-2">{position.entryPrice}</span>
              </div>
              <div>
                <span className="text-gray-500">Mark:</span>
                <span className="text-gray-300 ml-2">{position.markPrice}</span>
              </div>
              {position.liquidationPrice && (
                <div>
                  <span className="text-gray-500">Liq:</span>
                  <span className="text-red-400 ml-2">{position.liquidationPrice}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

