import React from 'react'

function PhotoCard({data}) {
   
  return (
    <div className='min-w-[26vw] min-h-[70vh] rounded-[1vh] overflow-hidden shadow-2xl text-black '>
       <div className='w-[100%] h-[80%] flex justify-center bg-white border-b-4'><img   width="300" height="200" src={data.urls.regular} alt="" /></div>
<div className='w-[100%] h-[20%] bg-[#9DB2BF]'>


</div>
    </div>
  )
}

export default PhotoCard
