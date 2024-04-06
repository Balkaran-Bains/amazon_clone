import React from 'react'
import Header from './Header'
import Subtotal from './Subtotal'
import CheckoutPro from './CheckoutPro'
import { useStateValue } from './StateProvider'

function Cart() {
  const [{basket,user},dispatch]=useStateValue();
  
  return (
    
    <div className="bg-gray-100 min-h-screen ">
  <Header />
  <div className="flex justify-center items-center mt-10">
    {/* <h1>hello {user?.email}  </h1>   ###########*************** NOT WORKING */}
    <div className="w-3/4 bg-gray-100 shadow-lg rounded-lg">
      <div className="p-5">
        <Subtotal />
      </div>
      <h1 className="text-3xl text-center my-5 font-semibold text-gray-800">Your Shopping Basket</h1>
      <div className="flex flex-col justify-center  gap-5 p-5 ml-16">
        {basket.map(item => (
          <CheckoutPro
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  </div>
</div>



  )
}

export default Cart