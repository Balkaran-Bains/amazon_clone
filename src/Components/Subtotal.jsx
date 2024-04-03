import React from 'react';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Payment from './Payment';
function Subtotal() {
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function
  const [{basket}, dispatch] = useStateValue();

  const handleProceedToCheckout = () => {
    // Navigate to the payment page when the button is clicked
    navigate('/Payment');
  };

  return (
    <div className='p-8 bg-gray-400 rounded-md shadow-lg flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-6 text-center text-yellow-900'>
        Subtotal ({basket.length} items): <strong className="text-green-700">${getBasketTotal(basket)}</strong>
      </h1>
      <div className='flex items-center mb-6'>
        <input type="checkbox" id="check-box-1" className="mr-3 rounded-full text-green-600 focus:ring-2 focus:ring-green-400" />
        <label htmlFor="check-box-1" className='text-lg text-gray-600'>This Order Contains a gift</label>
      </div>
      <button
        onClick={handleProceedToCheckout} // Call handleProceedToCheckout when the button is clicked
        className='bg-amber-400 px-8 py-3 rounded-md text-white font-semibold hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400'>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
