import { Inter } from "next/font/google"
import styles from "../styles/Home.module.css"
import { useEvmNativeBalance } from "@moralisweb3/next"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    const address = "0x1..."

    const { data: nativeBalance } = useEvmNativeBalance({ address });

    return (
        <div>
            <div className={styles.container}>Let's Go</div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
        </div>
        )
}
