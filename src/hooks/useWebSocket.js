import { useState, useEffect, useRef } from 'react'

export function useWebSocket(url) {
  const [data, setData] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const wsRef = useRef(null)

  useEffect(() => {
    // Mock WebSocket - simulate connection
    setIsConnected(true)
    
    // Simulate data updates
    const interval = setInterval(() => {
      setData({
        timestamp: Date.now(),
        orderbook: generateMockOrderbook(),
        trades: generateMockTrades(),
        positions: generateMockPositions(),
      })
    }, 1000) // Update every second

    return () => {
      clearInterval(interval)
      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [url])

  return { data, isConnected }
}

function generateMockOrderbook() {
  const bids = []
  const asks = []
  const basePrice = 45000 + Math.random() * 1000

  for (let i = 0; i < 10; i++) {
    bids.push({
      price: (basePrice - (i + 1) * 10).toFixed(2),
      size: (Math.random() * 5).toFixed(4),
    })
    asks.push({
      price: (basePrice + (i + 1) * 10).toFixed(2),
      size: (Math.random() * 5).toFixed(4),
    })
  }

  return { bids, asks, spread: 20 }
}

function generateMockTrades() {
  const trades = []
  const basePrice = 45000 + Math.random() * 1000

  for (let i = 0; i < 5; i++) {
    trades.push({
      price: (basePrice + (Math.random() - 0.5) * 100).toFixed(2),
      size: (Math.random() * 2).toFixed(4),
      side: Math.random() > 0.5 ? 'buy' : 'sell',
      time: Date.now() - i * 1000,
    })
  }

  return trades
}

function generateMockPositions() {
  return [
    {
      symbol: 'BTC-PERP',
      side: 'long',
      size: '0.5',
      entryPrice: '45234.50',
      markPrice: '45321.25',
      pnl: '43.38',
      pnlPercent: '0.19',
      leverage: '10x',
    },
    {
      symbol: 'ETH-PERP',
      side: 'short',
      size: '2.0',
      entryPrice: '2456.80',
      markPrice: '2432.10',
      pnl: '49.40',
      pnlPercent: '0.40',
      leverage: '5x',
    },
  ]
}

