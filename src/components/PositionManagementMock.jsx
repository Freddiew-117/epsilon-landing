import { useState } from 'react'

export function PositionManagementMock() {
  const [positions] = useState([
    { symbol: 'BTC/USD', side: 'Long', size: '0.5', entryPrice: '42,500', markPrice: '43,200', pnl: '+$350', pnlPercent: '+1.65%', leverage: '10x' },
    { symbol: 'ETH/USD', side: 'Short', size: '2.0', entryPrice: '2,800', markPrice: '2,750', pnl: '+$100', pnlPercent: '+1.79%', leverage: '5x' },
  ])

  return (
    <div className="bg-gray-100 dark:bg-space-light rounded-xl p-6 border border-gray-200 dark:border dark:border-gray-800">
      <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Position Management</h4>
      
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-space-darker rounded-lg p-4 border border-gray-300 dark:border dark:border-gray-800"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{position.symbol}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {position.side.toUpperCase()} • {position.leverage} • Size: {position.size}
                </div>
              </div>
              <div className={`text-right ${parseFloat(position.pnl.replace('$', '').replace('+', '')) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                <div className="font-semibold">{position.pnl}</div>
                <div className="text-sm">{position.pnlPercent}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm pt-3 border-t border-gray-300 dark:border-t dark:border-gray-800">
              <div>
                <span className="text-gray-600 dark:text-gray-500">Entry:</span>
                <span className="text-gray-900 dark:text-gray-300 ml-2">${position.entryPrice}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-500">Mark:</span>
                <span className="text-gray-900 dark:text-gray-300 ml-2">${position.markPrice}</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4 pt-3 border-t border-gray-300 dark:border-t dark:border-gray-800">
              <button className="flex-1 px-3 py-2 text-xs font-medium bg-accent-orange/20 text-accent-orange rounded border border-accent-orange/30 hover:bg-accent-orange/30 transition-colors">
                Adjust
              </button>
              <button className="flex-1 px-3 py-2 text-xs font-medium bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
                Close
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-300 dark:border-t dark:border-gray-800">
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Order History • Trade Log • Analytics
        </div>
      </div>
    </div>
  )
}

