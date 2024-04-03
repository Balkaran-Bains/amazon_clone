import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutPro( {image, title, price, rating,id}) {
    const [{basket},dispatch]=useStateValue();

    const removefrombasket = () => {
        dispatch({
            type : 'Remove_From_Basket',
            id : id,
        })
    }
  return (
    <div className='flex'>
        <div >
            <img className=' w-full h-64' src={image} alt="" />
        </div>
        
        <div className='m-8'>
        <p className='font-bold'>{title}</p>
        
    
        <p><strong>${price}</strong></p>
    
        <div className='flex'>
        {Array(rating).fill().map((_,i)=>(
        <p>⭐️</p>
        ))}
        </div>
        
    
    <button onClick={removefrombasket} className='bg-amber-300 px-2 py-1 rounded-md text-black font-semibold hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 mt-2'>
        Remove from Basket
    </button>
        </div>
            
    </div>
  )
}

export default CheckoutPro