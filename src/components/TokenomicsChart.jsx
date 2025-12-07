import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTheme } from '../hooks/useTheme'
import { useState, useEffect } from 'react'

const tokenomicsData = [
  { name: 'Staking rewards wallet', value: 20, color: '#e03f00', vesting: 'No vesting' },
  { name: 'Ecosystem, development', value: 10, color: '#3b82f6', vesting: '2 year cliff then 2% yearly' },
  { name: 'Marketing', value: 10, color: '#10b981', vesting: '1% yearly' },
  { name: 'Reserve', value: 15, color: '#8b5cf6', vesting: '5 year lock then 1% yearly' },
  { name: 'Initial Airdrop', value: 15, color: '#f59e0b', vesting: 'No vesting' },
  { name: 'Contributors', value: 15, color: '#ef4444', vesting: '1% yearly' },
  { name: 'Team', value: 10, color: '#06b6d4', vesting: 'Locked 2 years' },
  { name: 'Initial liquidity', value: 5, color: '#f97316', vesting: 'No vesting' },
]

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, percent, payload }) => {
  const RADIAN = Math.PI / 180
  // Calculate the point on the pie edge
  const pieX = cx + outerRadius * Math.cos(-midAngle * RADIAN)
  const pieY = cy + outerRadius * Math.sin(-midAngle * RADIAN)
  // Calculate label position (further out) - adjust spacing for mobile
  const isMobile = outerRadius < 150
  const labelRadius = outerRadius + (isMobile ? 15 : 25)
  const labelX = cx + labelRadius * Math.cos(-midAngle * RADIAN)
  const labelY = cy + labelRadius * Math.sin(-midAngle * RADIAN)
  const color = payload?.color || '#000000'
  const fontSize = isMobile ? 12 : 16

  return (
    <g>
      <line
        x1={pieX}
        y1={pieY}
        x2={labelX}
        y2={labelY}
        stroke={color}
        strokeWidth={2}
      />
      <rect
        x={labelX - 8}
        y={labelY - 8}
        width={16}
        height={16}
        fill={color}
        rx={2}
      />
      <text
        x={labelX > cx ? labelX + (isMobile ? 8 : 12) : labelX - (isMobile ? 8 : 12)}
        y={labelY}
        fill="currentColor"
        className="text-gray-900 dark:text-white"
        textAnchor={labelX > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={fontSize}
        fontWeight="700"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  )
}

export function TokenomicsChart() {
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const outerRadius = isMobile ? 100 : 180
  const chartHeight = isMobile ? 500 : 700
  
  return (
    <div className="bg-gray-100 dark:bg-space-light rounded-xl p-6 border border-gray-200 dark:border dark:border-gray-800">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white text-center">Tokenomics Distribution</h4>
      <p 
        className="text-2xl font-bold mb-6 text-center inline-block w-full"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(to right, #e03f00, #ffffff)'
            : 'linear-gradient(to right, #e03f00, #111827)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Total Supply: 100,000,000 Tokens
      </p>
      
      <ResponsiveContainer width="100%" height={chartHeight}>
        <PieChart>
          <Pie
            data={tokenomicsData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={<CustomLabel />}
            outerRadius={outerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {tokenomicsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="mt-6 space-y-3">
        {tokenomicsData.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-gray-200 dark:bg-space-darker rounded-lg border border-gray-300 dark:border-gray-800">
            <div 
              className="w-5 h-5 rounded flex-shrink-0 mt-0.5" 
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 dark:text-white">{item.value}%</span>
                <span className="text-gray-900 dark:text-white font-medium">{item.name}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{item.vesting}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

