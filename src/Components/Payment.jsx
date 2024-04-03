import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutPro from './CheckoutPro';
import { getBasketTotal } from './reducer';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="container mx-auto py-8">
      <div className="bg-blue-100 rounded-md shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Delivery Address</h2>
        <p className="text-gray-700">Email: {user?.email}</p>
        <p className="text-gray-700">Address: V.P.O Mahilpur, Punjab, India</p>
      </div>

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

      <div className="bg-yellow-100 rounded-md shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-4">
          <p className="text-gray-700">Total Items:</p>
          <p className="text-gray-700">{basket.length}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Payment Total:</p>
          <p className="text-gray-700">${getBasketTotal(basket)}</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
