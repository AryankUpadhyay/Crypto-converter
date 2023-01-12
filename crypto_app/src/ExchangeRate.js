import React from 'react'

const ExchangeRate=({exchangerate, chosenPrimaryCurrency, chosenSecondaryCurrency}) =>{
  return (
    <div className='exchange-rate'>
      <h2>Exchange Rate is</h2>
      <h1> {exchangerate}</h1>
      <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
      {/* console.log('the exchange value is ' , exchangerate) */}
    </div>
  )
}

export default ExchangeRate
