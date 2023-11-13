import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          Welcome to Solar Casino
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          A decentralized casino built on Solana. Get your share of SolarCasino revenues by holding $SLR.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=vBvgdW8KugUjKhibCefT2zndbPNfjDe1UHZzQkudxWK&outputSymbol=vBvgdW&fixed=in"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            BUY $SLR
          </Button>
        </div>
      </Section>
    </div>
  )
}
