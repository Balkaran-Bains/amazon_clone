import React from 'react'
import PrimeImg from './prime.jpeg'
import Pro from './Pro'

function Body() {
  return (
     <div className='bg-gradient-to-b from-black to-transparent -z-20'>
      <img src={PrimeImg} alt="" className='w-full mb-32 h-[520px] ' />

      
      <div className='top row flex  m-12 gap-12 '>
       <Pro title="Self improving Book - Think and grow rich by Napoleon Hill"
            price={8.99} 
           rating ={4}
           image ="https://i.pinimg.com/474x/4a/e4/dd/4ae4ddb6746bf9dfbed91c4328f52080.jpg"/>
       <Pro title="TABLE MAGIC - Pro Extended Work Space Laptop Table Mat Finish Laptop Table."
            price={12.99} 
           rating ={3}
           image ="https://i.pinimg.com/474x/da/39/5b/da395b05d07c1063a9f777b9156c0cae.jpg" />
       <Pro title="Homesake Modern Small Crystal Table Lamp,Bedroom Bedside Nightstand Lamp"
            price={35} 
           rating ={4}
           image ="https://i.pinimg.com/474x/ed/30/dd/ed30dd0ca62db355ad72d5c3b7783b70.jpg" />
        
      </div>

      <div className='middle row flex m-12 gap-12'>

      <Pro title="VW 80 cm (32 inches) Frameless Series HD Ready LED TV VW32A (Black)"
            price={399.99} 
           rating ={5}
           image ="https://i.pinimg.com/474x/11/a9/1c/11a91c97847e79162b67b53638365936.jpg" />
      <Pro title="Apple iPhone 15 Pro (256 GB) - White Titanium"
            price={999} 
           rating ={4}
           image ="https://i.pinimg.com/474x/4a/be/c1/4abec1eb927d8325a248b4e8fdb5f348.jpg" />

      </div>

      <div className='bottom row flex m-12 gap-12'>

      <Pro title="Amazon Brand - Solimo Water Resistant Bike Cover for Royal Enfield (Dark Blue & Silver)"
            price={18} 
           rating ={4}
           image ="https://i.pinimg.com/474x/51/50/63/515063f335495cc5556955a45700d440.jpg" />

      </div>
    </div>
  )
}

export default Body