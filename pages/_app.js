import Header from "@/components/Header"
import Head from "next/head" 
import "@/styles/globals.css"
import { MoralisProvider } from "react-moralis"

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace to buy and sell your NFTs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <Header></Header>
                <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}
