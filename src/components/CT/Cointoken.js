import React from 'react'
import './cointoken.css'
import ReadMoreReadLess from '../ReadMoreReadLess'

function Cointoken() {
    
  return (
    <div className='container'>
        <div className="row">
            <h2 className='text-center' style={{textDecoration:'underline', padding:'20px' , borderTop:'2px solid white',fontSize:'38px'}}>Coins Vs Tokens</h2>
            <ReadMoreReadLess>
                Coins are typically standalone cryptocurrencies that operate on their own blockchain network. 
                Examples of coins include Bitcoin, Litecoin, and Ethereum. These coins are designed to function as a medium of exchange and store of value, and they usually have their own unique set of features and functionalities.
                On the other hand, tokens are digital assets that are built on top of an existing blockchain network. Tokens do not have their own independent blockchain but instead use the underlying blockchain network's infrastructure 
                to facilitate transactions. Tokens can represent assets, such as shares in a company, or 
                can be used for a specific purpose, such as accessing a particular service or product.
            </ReadMoreReadLess>
            <div className=" coin-section col-sm-12 col-lg-6">
                <h3 className='text-center' style={{fontSize:'34px'}}>Coins</h3>
                <ul>
                    <li><span className='impt-bold'>Ethereum (ETH)</span> - Smart Contratcs and Decentralized Applications.</li>
                    <li><span className='impt-bold'> Litecoin (LTC) </span> - Designed to be faster and cheaper than bitcoin.</li>
                    <li><span className='impt-bold'>Ripple (XRP) </span> - Far and low-cost international money transfer.</li>
                    <li><span className='impt-bold'>Monero (XMR) </span> - A Privacy-focused Cryptocurrency, Designed to be untraceable </li>
                </ul>
            </div>
            <div className="coin-section col-sm-12 col-lg-6">
                <h3 className='text-center' style={{fontSize:'34px'}}>Tokens</h3>
                <ul>
                    <li><span className='impt-bold'>ERC-20</span> - Operates on the Ethereum blockchain, and can be used to represent any type of asset or utility.</li>
                    <li><span className='impt-bold'>Binance Smart Chain (BSC)</span> -  operate on the Binance Smart Chain, a blockchain developed by Binance.</li>
                    <li><span className='impt-bold'>Non-Fungible Tokens (NFTs)</span> - represent digital assets such as artwork, collectibles, and in-game items.</li>
                    <li><span className='impt-bold'>Stablecoins </span> - pegged to the value of a fiat currency, such as the US dollar or the euro, in order to minimize price volatility.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cointoken