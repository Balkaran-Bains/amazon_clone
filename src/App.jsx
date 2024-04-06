import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Newuser from './Components/Newuser';
import { useStateValue } from './Components/StateProvider';
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import YetToBeAdd from './Components/YetToBeAdd';


const promis = loadStripe("pk_test_51P250hSCjJGfEr8sOp1wkxaXvgZctn5RCqBxWmMtwG67E4DaXA3K5SCe6T1MMn2nVKM2Divy589tMEp3OvCqofvR00PNk8a1W0");

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      console.log("this is user", authUser);
  
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  
    console.log("Subscribed to authentication state changes");
  
    // Clean up the subscription
    return () => {
      unsubscribe();
      console.log("Unsubscribed from authentication state changes");
    };
  }, [dispatch]);
  
  return (
    <div>
      <Routes>
       
        <Route path="/payment" element={<Elements stripe={promis}><Payment /></Elements>} />
        
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newuser' element={<Newuser />} />
        <Route path='/yetToAdd' element={<YetToBeAdd />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
