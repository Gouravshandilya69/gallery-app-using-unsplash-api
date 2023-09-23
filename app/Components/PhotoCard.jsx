import React,{useState} from 'react'

function PhotoCard({data}) {
  const [hover,sethover]=useState(false)
  function hoverHandler(){
     sethover(true)
  }
  function removeHoverHandler(){
    sethover(false)
  }

   console.log(hover)
  return (
    <div className={hover?' rounded-[1vh] overflow-hidden  bg-red-500 shadow-2xl text-black':' rounded-[1vh] overflow-hidden shadow-2xl text-black '}
    onMouseEnter={hoverHandler} onMouseLeave={removeHoverHandler}>
      <img src={data.urls.small} alt="" />
    </div>
  )
}





export default PhotoCard
