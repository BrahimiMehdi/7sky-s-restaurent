import React from 'react'
import img from "../public/home.jpg"
import Image from 'next/image'
const home = () => {
  return (
    <div className='home text-white  p-[50px] justify-between flex'>
        <div className="my-auto">
        <h1 className='font-bold text-3xl mb-[-40px] '>Arwah</h1>
        <h1 className='font-bold  max-w-[600px] text-6xl z-1 '>   <br />OU DECOUVRI EL   <span className='text-[#fcfd0c] text-7xl'>BENA</span> ENDNA!!</h1>
       <br /><br />
       <div className="flex">

       <div className="card bg-white  px-3 flex justify-between z-100 h-[50px] rounded-xl">
            <h1 className='text-black font-bold my-auto'> <i class="uil uil-phone mx-2 text-[#1E1E1E] font-bold"></i>Commandez doka!</h1>


        </div>
        <a href="tel:+213541126006" className='text-md p-3   font-thin text-[#1E1E1E] ml-[50px] bg-[#fcfd0c]    rounded-xl'>7sky's menu</a>

       </div>
        
        {/* <a href="" className='text-[#fcfd0c] text-3xl'><i class="uil uil-instagram"></i></a>
        <a href="" className='text-[#fcfd0c] text-3xl'><i class="uil uil-map-marker"></i></a>     */}

   
    </div>
    <div className="h-full w-[3px] blur-[1px] bg-white absolute rotate-[150deg]"></div>
    <div className="h-full w-[3px] blur-[1px] bg-white  absolute rotate-[120deg] left-[60%] bottom-[100px]"></div>

    <div className="h-full w-[3px] z-[0] blur-[1px] bg-white absolute left-[60%] rotate-[-150deg]"></div>
        
    <div className="">
    <div className='border-[#fcfd0c] border-2 w-[600px] h-[400px] absolute z-[0] rounded-xl'></div>

                <Image src={img} className='rounded-xl w-[600px] h-[400px] z-[5] rotate-[-5deg]' width={500} height={500}></Image>

<p className='text-gray-300 text-center mt-4'> <i class="uil uil-map-marker"></i> 7sky's restaurent, Akid Lotfi, Oran</p>
    </div> 
        
    </div>
  )
}

export default home