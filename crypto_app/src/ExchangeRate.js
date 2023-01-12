import React from 'react'

const ExchangeRate=({exchangerate}) =>{
  return (
    <div className='exchange-rate'>
      <h2>Exchange Rate is</h2>
      {exchangerate}
      {/* console.log('the exchange value is ' , exchangerate) */}
    </div>
  )
}

export default ExchangeRate
