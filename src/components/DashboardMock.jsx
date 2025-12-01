import { mockPortfolio, mockFundingRate } from '../services/mockData'
import { useState } from 'react'

export function DashboardMock() {
  const [portfolio] = useState(mockPortfolio)
  const [fundingRate] = useState(mockFundingRate)

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value)
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="bg-space-light rounded-xl p-6 border border-gray-800">
      <h4 className="text-lg font-semibold mb-6 text-white">Portfolio Dashboard</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-500 mb-1">Account Equity</div>
          <div className="text-2xl font-bold text-white">{formatCurrency(portfolio.equity)}</div>
        </div>
        
        <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-500 mb-1">Available Margin</div>
          <div className="text-2xl font-bold text-green-400">{formatCurrency(portfolio.availableMargin)}</div>
        </div>
        
        <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-500 mb-1">Used Margin</div>
          <div className="text-2xl font-bold text-yellow-400">{formatCurrency(portfolio.usedMargin)}</div>
        </div>
        
        <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-500 mb-1">Unrealized PnL</div>
          <div className={`text-2xl font-bold ${parseFloat(portfolio.unrealizedPnl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {parseFloat(portfolio.unrealizedPnl) >= 0 ? '+' : ''}{formatCurrency(portfolio.unrealizedPnl)}
          </div>
        </div>
        
        <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-500 mb-1">Realized PnL</div>
          <div className="text-2xl font-bold text-green-400">{formatCurrency(portfolio.realizedPnl)}</div>
        </div>
        
        <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
          <div className="text-sm text-gray-500 mb-1">Total PnL</div>
          <div className={`text-2xl font-bold ${parseFloat(portfolio.totalPnl) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {parseFloat(portfolio.totalPnl) >= 0 ? '+' : ''}{formatCurrency(portfolio.totalPnl)}
          </div>
        </div>
      </div>

      <div className="bg-space-darker rounded-lg p-4 border border-gray-800">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500 mb-1">Funding Rate</div>
            <div className="text-lg font-semibold text-white">
              {(fundingRate.rate * 100).toFixed(4)}%
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Next Funding</div>
            <div className="text-lg font-semibold text-gray-300">
              {formatTime(fundingRate.nextFunding)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

