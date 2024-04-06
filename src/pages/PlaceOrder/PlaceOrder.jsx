import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount}= useContext(StoreContext)


  return (
    <form className='place-order'>
      {/* Left Side */}
      <div className="place-order-left">
        <div className="title">Delivery Information</div>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='E-mail Address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />

      </div>

      {/* Right Side */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹ {getTotalCartAmount()}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹ {getTotalCartAmount()===0?0:10}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Total</p>
            <p>₹ {getTotalCartAmount() === 0 ? 0:getTotalCartAmount()+10}</p>
          </div>
        <button>PROCEED TO PAYMENT</button>

        </div>


      </div>
    

    </form>
  )
}

export default PlaceOrder
