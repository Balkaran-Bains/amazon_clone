import React from 'react'
import Button from './Button'
import { useStateValue } from './StateProvider'

function Pro({title,price, rating, image }) {

    const [state,dispatch] =useStateValue();

    const addtobasket =()=> {
        dispatch({
                type:"ADD_TO_BASKET",
                item:{
                    title:title,
                    price:price,
                    rating:rating,
                    image:image,
                },
        });
        
    };

  return (
    <div className=' w-full h-full bg-white flex justify-center items-center p-3  rounded-md hover:scale-105 transition duration-200'>

    <div className=' '>
        <div >
            <p className=''>{title} </p>
            <p>
                <small>$</small>
                <strong>{price}</strong>
                <div className=' flex'>
                {Array(rating)              // create an array equal to the length of rating
                .fill()                     // This fills the array with undefined values
                .map((_,i)=>(           // This iterates over each element of the array, using the index (i) to determine the number of stars to display.
                    <p> ⭐️</p>
                ))}
                </div>
                
                
            </p>
        
            <img src={image} alt="" className=' w-80 h-80 '/>

            <div className='flex justify-center'>
                <button onClick={addtobasket} className=' bg-amber-300 text-black rounded-full mt-3 font-light text-sm py-1 px-4 hover:scale-110 transition duration-300'>Add to basket</button>
            </div>
        </div>
        
            
        
    </div>
    </div>
  )
}

export default Pro

// import React from 'react';
// import Button from './Button'; // Assuming Button component is located in the same directory

// function Pro() {
//   return (
//     <div className='bg-white flex justify-between p-4 gap-2'>
//       <div className="border border-red-500"> {/* Add a border for visibility */}
//         <p>Something interesting about this new product</p>
//         <p>
//           <small>$</small>
//           <strong>12.90</strong>
//         </p>
//         <img src="https://i.pinimg.com/474x/39/bf/12/39bf1228ba7b8a9aef3d015765ce7e99.jpg" alt="" className='w-80 h-80' />
//         <Button />
//       </div>
//     </div>
//   );
// }

// export default Pro;
