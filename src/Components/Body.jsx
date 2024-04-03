import React from 'react'
import PrimeImg from './prime.jpeg'
import Pro from './Pro'

function Body() {
  return (
     <div className='bg-gradient-to-b from-black to-transparent -z-20'>
      <img src={PrimeImg} alt="" className='w-full mb-32 h-[520px] ' />

      
      <div className='top row flex  m-12 gap-12 '>
       <Pro title="Think and grow rich by Napoleon Hill"
            price={12.99} 
           rating ={4}
           image ="https://i.pinimg.com/474x/4a/e4/dd/4ae4ddb6746bf9dfbed91c4328f52080.jpg"/>
       <Pro/>
       <Pro/>
        
      </div>

      <div className='middle row flex m-12 gap-12'>

      <Pro/>
      <Pro/>

      </div>

      <div className='bottom row flex m-12 gap-12'>

      <Pro/>

      </div>
    </div>
  )
}

export default Body