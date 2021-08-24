import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { useState, useEffect } from "react";
import React from "react";

export const Web3Context = React.createContext(undefined);

const getProvider = () => {
    if(window.solana) {
        const provider = window.solana;
        if(provider.isPhantom) {
            return provider;
        } else {
            console.log("Install Phantom wallet");
        }
    }
    window.open("http://phantom.app", "_blank");
}

const NETWORK = clusterApiUrl("devnet");

export function Web3ContextProvider({ children }) {
    const provider = getProvider();
    const connection = new Connection(NETWORK);
    const [ connected, setConnected ] = useState(true);
    const [ currentAccount, setCurrentAccount ] = useState();


    useEffect(() => {
        if(provider) {
            provider.on("connect", () => {
                setConnected(true);
                setCurrentAccount(provider.publicKey.toBase58());
            })
            provider.on("disconnect", () => {
                setConnected(false);
                setCurrentAccount();
            })
        }
    }, [provider]);

    const phantomConnect = async () => {
        console.log("Connecting");
        provider.connect();
    }

    const phantomDisconnect = async () => {
        console.log("Disconnecting");
        provider.disconnect();
    }

    return (
        <Web3Context.Provider
            value={{
                phantomConnect,
                phantomDisconnect,
                currentAccount,
                provider
            }}
        >
            {children}
        </Web3Context.Provider>
    )
}