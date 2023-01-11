import React from 'react'
import ExchangeRate from './ExchangeRate'
const CryptoConverter = () =>{
  return (
    <div className='crypto-converter'>
      <h2> CryptoConverter</h2>
      <div>
      <table>
        <body>
          <tr>
            <td>Primary Converter</td>
            <td>
              <input
              type="number"
              name="currency-ammount-1"
              value={""}
              />
            </td>

            <td>
              <select
              type="number"
              name="currency-option-1"
              className="currency-options"
              value={""}
              >
              <option></option>
              
              </select>
            </td>
          </tr>


          <tr>
            <td>Secondary Converter</td>
            <td>
              <input
              type="number"
              name="currency-ammount-2"
              value={""}
              />
            </td>

            <td>
              <select
              type="number"
              name="currency-option-2"
              className="currency-options"
              value={""}
              >
              <option></option>
              
              </select>
            </td>
            
          </tr>



        </body>
      </table>
      </div>

      <ExchangeRate/>
    </div>
  )
}

export default CryptoConverter
