import React from 'react'
import AmazonImage from './a.jpg';
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket},dispatch]= useStateValue();
  return (
    <div className=' flex justify-between w-full bg-slate-800 text-white items-center sticky top-0 z-50 '>
        <div>
            <Link to="/">
            <img src={AmazonImage} alt="" className=' bg-center h-14  ml-4 w-52 rounded-sm items-center' />
            </Link>
            
        </div>

        <div className='flex items-center m-2' >
            <div className=' py-2  bg-gray-200 w-14 h-10 justify-between items-center p-2 rounded-sm text-gray-600 justify-b flex'>
                <h1 className=' text-sm'>All</h1>
                <MdArrowDropDown />
            </div>
             <input type="text" placeholder="" className="  rounded-sm py-2 px-44  hover:border-blue-300" />
             <IoIosSearch className='bg-orange-300 text-black  h-10 w-10 p-2 font-bold  rounded-sm ' />
        </div>


        <div className='4things flex justify-center  gap-6 mr-4 items-center leading-none'>

            <Link to='/login'>
            <div>
                <h3 className=' text-xs  text-gray-400'>Hello</h3>
                <h1>Sign in</h1>
            </div>
            </Link>
            

            <div>
                <h3 className=' text-xs  text-gray-400'>Returns</h3>
                <h1>& Orders</h1>
            </div>

            <div>
                <h3 className=' text-xs  text-gray-400'> Your</h3>
                <h1> Prime</h1>
            </div>

            <Link to="/Cart">
                <div className='flex items-center gap-2 '>
                <FaCartShopping />
            <h1>
            {basket?.length} 
            </h1>
                
                </div>
            </Link>
            
            
        </div>
        
    </div>
  )
}

export default Header

// import React from 'react';
// import AmazonImage from './a.jpg';
// import { IoSearch, IoIosSearch } from 'react-icons/io';
// import { FaCartShopping } from 'react-icons/fa';
// import { MdArrowDropDown } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import { useStateValue } from './StateProvider';

// function Header() {
//   const [{ basket }] = useStateValue();

//   return (
//     <div className='flex justify-between w-full bg-slate-800 text-white items-center sticky top-0 z-50'>
//       <div>
//         <Link to="/">
//           <img src={AmazonImage} alt="Amazon Logo" className='bg-center h-14 ml-4 w-52 rounded-sm items-center' />
//         </Link>
//       </div>

//       <div className='flex items-center m-2'>
//         <div className='py-2 bg-gray-200 w-14 h-10 justify-between items-center p-2 rounded-sm text-gray-600 justify-b flex'>
//           <h1 className='text-sm'>All</h1>
//           <MdArrowDropDown />
//         </div>
//         <input type="text" placeholder="" className="rounded-sm py-2 px-44 hover:border-blue-300" />
//         <IoIosSearch className='bg-orange-300 text-black h-10 w-10 p-2 font-bold rounded-sm' />
//       </div>

//       <div className='4things flex justify-center gap-6 mr-4 items-center leading-none'>
//         <div>
//           <h3 className='text-xs text-gray-400'>Hello</h3>
//           <h1>Sign in</h1>
//         </div>

//         <div>
//           <h3 className='text-xs text-gray-400'>Returns</h3>
//           <h1>& Orders</h1>
//         </div>

//         <div>
//           <h3 className='text-xs text-gray-400'> Your</h3>
//           <h1> Prime</h1>
//         </div>

//         <Link to="/Cart">
//           <div className='flex items-center gap-2'>
//             <FaCartShopping />
//             <h1>{basket?.length || 0}</h1>
//           </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Header;
