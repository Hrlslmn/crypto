import React, { useEffect, useState } from 'react'
import "./App.css"
import Cointoken from './CT/Cointoken'
import Footer from './footer/Footer'
import Header from './header/Header'
import InfiniteScroll from './infiniteScroll/InfiniteScroll'

function App() {
  
 function boredApi(){
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=`+selectSymbol+`&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
    .then(response => response.json())
    .then(data => [setSymbol(data[0].id),setPrice(data[0]['sparkline_in_7d'].price.slice(-1)[0]),setIconSymbol(data[0].symbol),setAth(data[0].ath),setAtl(data[0].atl)])
  }
  const [selectSymbol,setSelectSymbol] =  useState('')
  const[symbol,setSymbol]=useState("")
  const[ath,setAth]=useState("")
  const[atl,setAtl]=useState("")
  const[iconsSymbol,setIconSymbol]=useState("")
  const[price,setPrice]=useState('0')
  useEffect(()=>{
    console.log('fetched Activity')
  },[selectSymbol]);
  const firstLetter = symbol.charAt(0).toUpperCase()
  const remaining = symbol.substring(1)
  const coinName = firstLetter + remaining;
  let round_number = Math.round(price * 100) / 100;
  let round_ath = Math.round(ath * 100) / 100;
  let round_atl = Math.round(atl * 100) / 100;

  if(atl < 0.01){
     round_atl =  Math.round(atl * 100000) / 100000;
  }
  
  
  return (
    <>     
      <Header/>
      <div className='main-container'>
        <h1 className='crypto-title '>Enquire Crypto Price</h1>
        <div className='select-crypto'>
          <select className='option-selector' onChange={(e)=>{
            const selectedSymbol = e.target.value;
            setSelectSymbol(selectedSymbol)
          }}>
            <option value="" className='crypto-options'>--Select--</option>
            <option value="ethereum" className='crypto-options'>Ethereum</option>
            <option value="bitcoin" className='crypto-options'>Bitcoin</option>
            <option value="cardano" className='crypto-options'>Cardano</option>
            <option value="ripple" className='crypto-options'>XRP</option>
            <option value="dogecoin" className='crypto-options'>Doge</option>
            <option value="chainlink" className='crypto-options'>Chainlink</option>
          </select>
        </div>
        <p className='results'>Name: {coinName} || {iconsSymbol}</p>
        <p className='results'>Recent Price: {round_number} USD</p>
        <p className="results">All time high : {round_ath} USD</p>
        <p className="results">All time low : {round_atl} USD</p>
        <button onClick={boredApi} className='price-btn'>Enquire</button>
        
      </div>
      <InfiniteScroll />
      <Cointoken />
      
      <Footer />
    </>
  )
}

export default App
