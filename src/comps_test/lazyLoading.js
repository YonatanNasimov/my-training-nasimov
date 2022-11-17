import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function LazyLoading() {
  let [show,setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll",onScroll);
    // רגע לפני שהקומפנינטה נעלמת כאשר
    // אנחנו עוברים לדף אחר
    // כמו מחזור componentwillunmount
    return () => {
      // יבטל את האזנה לאירוע כדי 
      // שלא יהיו כפילויות שעוברים בין דפים
      window.removeEventListener("scroll",onScroll);
    }
  },[])


  const onScroll = () => {
    // מחזיר לנו את גובה החלון
    let windowHeight = window.innerHeight;
    // מחזיר את נקודת הוואי העליון שהחלון נמצא בה מבחינת גלילה, שניהיה הכי למעלה נקבל 0
    let scrollTop = document.documentElement.scrollTop;

    // יחזיר את גובה כל המסמך
    let docHeight = document.documentElement.offsetHeight;
    console.log("Scroll",windowHeight,scrollTop,docHeight)

    if(Math.ceil(windowHeight + scrollTop) == docHeight){
      // alert("end of page")
      setShow(true)
    }
  }


  return (
    <div className="container">
      <div className='bg-info' style={{minHeight:"1200px"}}>div 1</div>
      <div className='bg-danger' style={{minHeight:"1200px",display:(!show) ? "none" : "block"}}>div 2</div>
    
    </div>
  )
}
