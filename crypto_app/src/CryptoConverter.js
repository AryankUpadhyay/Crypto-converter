import React from 'react'
import ExchangeRate from './ExchangeRate'
import { useState } from 'react'
import axios from 'axios';

const CryptoConverter = () =>{

  const currencies=['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

  const [chosenPrimaryCurrency, setPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setSecondaryCurrency] = useState('BTC')
  const [Amount, setAmount] = useState(1)
  const[ExchangeRateValue, setExchangeRate]= useState(0)
  const [result, setResult]= useState(0);
  // console.log(chosenPrimaryCurrency);

const Convert=()=>{

  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
    headers: {
      'X-RapidAPI-Key': process.env.Process_ID_CryptoWork,
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']* Amount)
  }).catch(function (error) {
    console.error(error);
  });

};
console.log('The output is', ExchangeRateValue)

  return (
    <div className='crypto-converter'>
      <h2> CryptoConverter</h2>
      <div className='input-box'>
      <table>
        <tbody>
          <tr>
            <td>Primary Converter</td>
            <td>
              <input
              type="number"
              name="currency-ammount-1"
              value={Amount}
              onChange={(event)=>setAmount(event.target.value)}
              />
            </td>

            <td>
              <select
              // type="number"
              name="currency-option-1"
              className="currency-options"
              value={chosenPrimaryCurrency}
              onChange={(event)=>setPrimaryCurrency(event.target.value)}
              // console.log(chosenPrimaryCurrency);
              >
              {currencies.map((currency, _index)=>(<option key={_index}>{currency}</option>))}
              </select>
            </td>
          </tr>


          <tr>
            <td>Secondary Converter</td>
            <td>
              <input
              type="number"
              name="currency-ammount-2"
              value={result}
              disabled={true}
              />
            </td>

            <td>
              <select
              type="number"
              name="currency-option-2"
              className="currency-options"
              value={chosenSecondaryCurrency}
              onChange={(event)=>setSecondaryCurrency(event.target.value)}
              >
              {currencies.map((currency, _index)=>(<option key={_index}>{currency}</option>))}
              
              </select>
            </td>
          </tr>

        </tbody>
      </table>

      <button className='convert-button' onClick={Convert}>Convert</button>

      </div>

      <ExchangeRate
      exchangerate={ExchangeRateValue}
      chosenPrimaryCurrency={chosenPrimaryCurrency}
      chosenSecondaryCurrency={chosenSecondaryCurrency}
      />
    </div>
  )
}

export default CryptoConverter
