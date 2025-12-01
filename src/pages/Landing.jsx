import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { FeatureCard } from '../components/FeatureCard'
import { Banner } from '../components/Banner'
import { SpaceDecoration } from '../components/SpaceDecoration'
import { OrderbookMock } from '../components/OrderbookMock'
import { PositionsMock } from '../components/PositionsMock'
import { DashboardMock } from '../components/DashboardMock'

export function Landing() {
  return (
    <div>
      <Hero />
      
      <Section id="features" title="Trading Features" subtitle="Everything you need for professional trading" className="relative">
        <SpaceDecoration type="planet-small" position="left" size="small" />
        <FeatureCard
          title="Orderbook Trading"
          description="Advanced order types for precise execution control."
          bullets={[
            'Limit: price chosen by user',
            'Market: matches best bid/ask instantly',
            'Stop-loss / take-profit orders',
            'Post-only / reduce-only flags',
            'Off-chain matching engine processes in milliseconds, then settles on-chain',
          ]}
          illustration={<OrderbookMock />}
        />

        <FeatureCard
          title="Leverage / Margin Trading"
          description="Trade with leverage up to 20x with sophisticated margin management."
          bullets={[
            'Initial & maintenance margin requirement, margin ratio',
            'Ledger tracks entry price, position size, real-time PnL',
            'Example: 10x, 20x leverage options',
          ]}
          illustration={<PositionsMock />}
          reverse
        />

        <FeatureCard
          title="Perpetual Futures (No Expiry)"
          description="Trade perpetual contracts without expiration dates."
          bullets={[
            'Long and short positions',
            'Funding rate updates every 1–8 hrs',
            'Real-time PnL calculation',
          ]}
          illustration={<DashboardMock />}
        />

        <FeatureCard
          title="Full Position Management UI"
          description="Complete control over your trading positions."
          bullets={[
            'View open positions',
            'Adjust leverage',
            'Partial/close positions',
            'Order/trade history',
          ]}
          reverse
        />

        <FeatureCard
          title="Real-Time Orderbook"
          description="Live market data with millisecond precision."
          bullets={[
            'Top of book display',
            'Full depth (100+ levels)',
            'Live trades feed',
            'Millisecond updates',
          ]}
        />

        <FeatureCard
          title="Portfolio Dashboard"
          description="Comprehensive account overview and analytics."
          bullets={[
            'Account equity tracking',
            'Available/used margin',
            'Unrealized/realized PnL',
            'Funding history',
          ]}
          reverse
        />

        {/* Second Announcement Banner */}
        <div className="relative my-16 sm:my-20">
          <SpaceDecoration type="planet-large" position="right" size="large" />
          <Banner
            title="⚡ Zero-Fee Trading Event"
            message="Experience professional-grade trading with zero fees during our launch period. Limited time offer for early adopters."
            ctaText="Learn More"
            ctaLink="#"
            variant="blue"
          />
        </div>

        <FeatureCard
          title="Liquidations"
          description="Automated risk management and liquidation system."
          bullets={[
            'Auto-detect under-margin',
            'Liquidator bot flow',
            'Collateral seizure',
            'Bounty system',
          ]}
        />
        <SpaceDecoration type="spaceship" position="right" size="medium" />

        <FeatureCard
          title="Cross-Market Trading"
          description="Trade multiple markets including BTC, ETH, and more."
          bullets={[
            'Market config: oracle, IMR/MMR, tick size, funding params',
            'Support for multiple trading pairs',
            'Unified interface across markets',
          ]}
          reverse
        />

        <FeatureCard
          title="Oracle-Backed Pricing"
          description="Secure and reliable price feeds."
          bullets={[
            'Price pusher → Pyth later',
            'Low latency feeds',
            'Anti-manipulation notes',
          ]}
        />

        <FeatureCard
          title="Fast Deposits & Withdrawals"
          description="Seamless fund management with safety constraints."
          bullets={[
            'Deposits into Vault.sol',
            'Withdrawals with margin checks',
            'Safety constraints',
          ]}
          reverse
        />

        <FeatureCard
          title="Advanced Trading Features"
          description="Professional-grade order types and execution."
          bullets={[
            'Trailing stops',
            'OCO (One-Cancels-Other)',
            'Conditional orders',
            'Iceberg orders',
            'Hidden orders',
            'Pro UI scaling',
          ]}
        />

        <FeatureCard
          title="Admin / Operator Tools"
          description="Comprehensive platform management capabilities."
          bullets={[
            'Market listing',
            'Fee config',
            'Max leverage settings',
            'Risk tuning',
            'Emergency pause',
          ]}
          reverse
        />

        <FeatureCard
          title="Full WebSocket-Based Real-Time UI"
          description="Live data streaming for all market and account information."
          bullets={[
            'Streams: orderbook, trades, positions, balances',
            'Funding updates',
            'Liquidations feed',
            'Real-time synchronization',
          ]}
        />
        <SpaceDecoration type="planet" position="left" size="medium" />
      </Section>

      {/* Announcement Banner */}
      <div className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <SpaceDecoration type="planet" position="left" size="medium" />
        <Banner
          title="🌟 Join the Revolution"
          message="Be part of the next generation of decentralized trading. Connect with traders, share strategies, and help shape the future of perpetual futures."
          ctaText="Get Started"
          ctaLink="#"
          variant="turquoise"
        />
        <SpaceDecoration type="spaceship" position="right" size="small" />
      </div>
    </div>
  )
}

