// import React from 'react';
// import { useStateValue } from './StateProvider';
// import CheckoutPro from './CheckoutPro';
// import { getBasketTotal } from './reducer';
// import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();

//   const stripe = useStripe();
//   const elements = useElements();

//   return (
//     <div className="container mx-auto py-8">
//       <div className="bg-blue-100 rounded-md shadow-md p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Delivery Address</h2>
//         <p className="text-gray-700">Email: <strong><span>{user ?  user.email:'Hello'}</span></strong></p>
//         <p className="text-gray-700">Address: V.P.O Mahilpur,  India</p>
//       </div>

//       <div className="bg-green-100 rounded-md shadow-md p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Review Items</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {basket.map(item => (
//             <CheckoutPro
//               key={item.id}
//               id={item.id}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="bg-yellow-100 rounded-md shadow-md p-6">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
//         <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-4">
//           <p className="text-gray-700">Total Items:</p>
//           <p className="text-gray-700">{basket.length}</p>
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-gray-700">Payment Total:</p>
//           <p className="text-gray-700">${getBasketTotal(basket)}</p>
//         </div>
//       </div>
//       <div>
//         <div>
//           <h1>Payment Method</h1>
//         </div>
//         <div>
//           <form action="">
//             <CardElement/>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;


import React, {useState, useEffect} from 'react';
import { useStateValue } from './StateProvider';
import CheckoutPro from './CheckoutPro';
import { getBasketTotal } from './reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError]=useState(null);
  const [disabled, setDisabled]= useState(null);


  // useEffect(()=>{
  //   const getCientSecret =async ()=>{
  //     const response = await axios({
  //       method : 'post',
  //       url :
  //     })
  //   }
  // })


  const handleSubmit= async (event) =>{

    event.preventDefault();

  }

  const handleChange= event =>{

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "")

  }

  return (
    <div className="container mx-auto py-8">
      {/* Delivery Address */}
      <div className="bg-blue-100 rounded-md shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Delivery Address</h2>
        <p className="text-gray-700">Email: <strong><span>{user ? user.email : 'Hello'}</span></strong></p>
        <p className="text-gray-700">Address: V.P.O Mahilpur, India</p>
      </div>

      

      {/* Order Summary */}
      <div className="bg-yellow-100 rounded-md shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-4">
          <p className="text-gray-700">Total Items:</p>
          <p className="text-gray-700"><strong>{basket.length}</strong></p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Payment Total:</p>
          <p className="text-gray-700"><strong>${getBasketTotal(basket)}</strong></p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-gray-100 rounded-md shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Method</h2>
        <div className="bg-blue-200 rounded-md p-4">
          <form onSubmit={handleSubmit}> 
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
                Credit or debit card
              </label>
              <div id="card-element" className="border p-2 rounded-md">
                <CardElement onChange={handleChange} options={{
                  style: {
                    base: {
                      fontSize: '18px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#6b7075',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }} />
              </div>
            </div>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" disabled={!stripe}>
              Pay ${getBasketTotal(basket)}
            </button>
          </form>
        </div>
      </div>

      {/* Review Items */}
      <div className="bg-green-100 rounded-md shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Review Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {basket.map(item => (
            <CheckoutPro
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Payment;
