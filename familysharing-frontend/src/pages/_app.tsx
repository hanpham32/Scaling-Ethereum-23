import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultWallets, lightTheme, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// If we want to use Alchemy as a provider
// import { alchemyProvider } from 'wagmi/providers/alchemy';


const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'FamilyShare App',
  chains
});
const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={lightTheme({
          accentColor: '#1B2C5D'
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
  </WagmiConfig>
  )
}
