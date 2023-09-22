'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import PhotoCard from './PhotoCard';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
function MainPage() {
   const [newApiData, setApiData] = useState([])
   const [page, setpage] = useState(1)


   async function fetch() {
      const fetched = await axios.get(`https://api.unsplash.com/photos?page=${page}&client_id=NNRp3OnIR7WZfQfhv_4Upwq5M3BN3AUjzo3S9n0J6Os&per_page=30`)
      setApiData(newApiData.concat(fetched.data))
      setpage(page + 1)
   }

 
   useEffect(() => {
      fetch()

   }, [])

  

   return (
      <div className='w-[100vw] min-h-[100vh] bg-[#F1EFEF]'>
         <Navbar />
         <div id="showPHotos" className='min-h-[90vh] w-[100%]  flex flex-col gap-2 items-center'>
            <div id="heading" className='  w-[100%] min-h-[10vh]'>
               <h1 className='text-[3vw] pl-[3.5vw] font-[Antic Didone] tracking-[0.2vw] uppercase text-black border-gray-950 border-b-2 '>Photos</h1></div>
            <div id="grid" className='min-h-[78vh] w-[96%] flex gap-5 flex-wrap  justify-center'>



{
   newApiData.map((eachData,index)=>{
     return <PhotoCard key={index} data={eachData}/>
   })

}


            </div>
            <div className='w-[100%] h-[10vh]  flex items-center justify-center border-t-2 border-black'><button onClick={fetch}>Load More</button></div>
         </div>
      </div>
   )
}

export default MainPage
