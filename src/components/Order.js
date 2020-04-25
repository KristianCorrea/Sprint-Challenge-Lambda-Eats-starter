import React from 'react'

function Order({ details }) {
    console.log(details)
  return (
    <div className='friend container'>
      <h2>Customer Name: {details.name}</h2>
      <p>Pizza Size: {details.pizzaSize}</p>
      
      

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {
              details.toppings.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
      }
      <p>Special Instructions: {details.instructions}</p>
    </div>
  )
}

export default Order
