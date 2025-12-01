// Mock data service for UI demos

export const mockMarkets = [
  { symbol: 'BTC-PERP', name: 'Bitcoin Perpetual', price: 45234.50, change24h: 2.5 },
  { symbol: 'ETH-PERP', name: 'Ethereum Perpetual', price: 2432.10, change24h: -1.2 },
  { symbol: 'SOL-PERP', name: 'Solana Perpetual', price: 98.45, change24h: 5.8 },
]

export const mockOrderbook = {
  bids: [
    { price: 45230.00, size: 1.25 },
    { price: 45225.00, size: 2.50 },
    { price: 45220.00, size: 0.75 },
    { price: 45215.00, size: 3.20 },
    { price: 45210.00, size: 1.80 },
  ],
  asks: [
    { price: 45250.00, size: 1.10 },
    { price: 45255.00, size: 2.30 },
    { price: 45260.00, size: 0.90 },
    { price: 45265.00, size: 1.75 },
    { price: 45270.00, size: 2.00 },
  ],
  spread: 20.00,
}

export const mockPositions = [
  {
    id: 1,
    symbol: 'BTC-PERP',
    side: 'long',
    size: '0.5',
    entryPrice: '45234.50',
    markPrice: '45321.25',
    pnl: '43.38',
    pnlPercent: '0.19',
    leverage: '10x',
    margin: '2261.73',
    liquidationPrice: '40711.05',
  },
  {
    id: 2,
    symbol: 'ETH-PERP',
    side: 'short',
    size: '2.0',
    entryPrice: '2456.80',
    markPrice: '2432.10',
    pnl: '49.40',
    pnlPercent: '0.40',
    leverage: '5x',
    margin: '491.36',
    liquidationPrice: '2550.00',
  },
]

export const mockTrades = [
  { price: 45245.50, size: 0.25, side: 'buy', time: Date.now() - 1000 },
  { price: 45248.75, size: 0.50, side: 'sell', time: Date.now() - 2000 },
  { price: 45242.30, size: 0.75, side: 'buy', time: Date.now() - 3000 },
  { price: 45250.00, size: 1.00, side: 'buy', time: Date.now() - 4000 },
  { price: 45238.90, size: 0.30, side: 'sell', time: Date.now() - 5000 },
]

export const mockPortfolio = {
  equity: '12543.21',
  availableMargin: '8234.56',
  usedMargin: '4308.65',
  unrealizedPnl: '92.78',
  realizedPnl: '234.50',
  totalPnl: '327.28',
}

export const mockFundingRate = {
  rate: 0.0001,
  nextFunding: Date.now() + 3600000, // 1 hour from now
  lastFunding: Date.now() - 3600000,
}

