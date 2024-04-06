// import { auth } from './firebase/firebase';
import { getAuth } from "firebase/auth";

import React,{useState} from 'react'
import AmazonImage from './a.jpg';
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



function Header() {

    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [{basket, user},dispatch]= useStateValue();

    const auth = getAuth();

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();

        }
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
  return (
    <div className='flex justify-between w-full bg-slate-800 text-white items-center sticky top-0 z-50'>
    <div>
        <Link to="/">
            <img
                src={AmazonImage}
                alt=""
                className='bg-center h-14 ml-4 w-52 rounded-sm items-center transition duration-300 ease-in-out transform hover:scale-105'
            />
        </Link>
    </div>

       {/* <div className='flex items-center m-2'>
    <div className='py-2 bg-gray-200 w-14 h-10 justify-between items-center p-2 rounded-sm text-gray-600 justify-b flex'>
        <h1 className='text-sm'>All</h1>
        <MdArrowDropDown />
    </div>
    <input type="text" placeholder="" className="text-black rounded-sm py-2 px-44 hover:border-blue-300 transition duration-300 ease-in-out" />
    <IoIosSearch className='bg-orange-300 text-black h-10 w-10 p-2 font-bold rounded-sm hover:bg-orange-400 transition duration-300 ease-in-out' />
</div> */}

<div className='flex items-center m-2 relative'>
                <div
                    className='py-2 bg-gray-200 w-14 h-10 justify-between items-center p-2 rounded-sm text-gray-600 justify-b flex cursor-pointer'
                    onClick={toggleDropdown}
                >
                    <h1 className='text-sm'>All</h1>
                    <MdArrowDropDown />
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-10 ">
                    {/* Dropdown Content Here */}
                    <div className="p-4 text-gray-700">
                        <p className="mb-2 hover:text-black cursor-pointer transition duration-300 hover:scale-105">All</p>
                        <p className="mb-2 hover:text-black cursor-pointer transition duration-300 hover:scale-105">Books</p>
                        <p className="mb-2 hover:text-black cursor-pointer transition duration-300 hover:scale-105">Home Decoration </p>
                        <p className= "mb-2 hover:text-black cursor-pointer transition duration-300 hover:scale-105">Electronics</p>
                        <p className="mb-2 hover:text-black cursor-pointer transition duration-300 hover:scale-105">Bikes and accessories</p>
                    </div>
                </div>
                
                )}
                <input type="text" placeholder="" className="text-black rounded-sm py-2 px-44 hover:border-blue-300 transition duration-300 ease-in-out" />
                <IoIosSearch className='bg-orange-300 text-black h-10 w-10 p-2 font-bold rounded-sm hover:bg-orange-400 transition duration-300 ease-in-out' />
            </div>

            <Link to={'/contact'} className="hover:text-gray-500 hover:cursor-pointer hover:scale-105 transition duration-200">
        <div>
            <h3 className='text-xs text-gray-400'></h3>
            <h1> Contact Me <small>😃</small></h1>
        </div>
    </Link>

<div className='4things flex justify-center gap-6 mr-4 items-center leading-none'>

    <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="hover:text-gray-500 hover:cursor-pointer hover:scale-105 transition duration-200">
            <h3 className='text-xs text-gray-400'>{user ? user.email : 'Hello'}</h3>
            <h1>{user ? 'Sign Out' : 'Sign In'}</h1>
        </div>
    </Link>

    <Link to={'/yetToAdd'} className="hover:text-gray-500 hover:cursor-pointer hover:scale-105 transition duration-200">
        <div>
            <h3 className='text-xs text-gray-400'>Returns</h3>
            <h1>& Orders</h1>
        </div>
    </Link>

    <Link to={'/yetToAdd'} className="hover:text-gray-500 hover:cursor-pointer hover:scale-105 transition duration-200">
        <div>
            <h3 className='text-xs text-gray-400'> Your</h3>
            <h1> Prime</h1>
        </div>
    </Link>

    <Link to="/Cart" className="hover:text-gray-500 hover:cursor-pointer hover:scale-105 transition duration-200">
        <div className='flex items-center gap-2'>
            <FaCartShopping />
            <h1>{basket?.length}</h1>
        </div>
    </Link>

</div>

        
    </div>
  )
}

export default Header



