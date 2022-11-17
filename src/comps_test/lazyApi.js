import axios from 'axios';
import React, { useState , useEffect } from 'react'
import { useScroll } from '../hooks/useScroll';


export default function LazyApi() {
  const [ar,setAr] = useState([]);
  const [endScreen,endScreenEnd] = useScroll(900);
  const [page,setPage] = useState(1);
  // בודק אם זאת טעינה פעם ראשונה
  // בשביל לא להפעיל את היוז אפקט של האינד סקריין
  // שהאפליקציה נטענת רק לאחר שבאמת האנד סקרין משתנה
  const [firstLoad,setFirstLoad] = useState(true)

  useEffect(() => {
    doApi();
  },[page])

  useEffect(() => {
    console.log("end screen hook")
    // בודק אם הדף רק נטען ולא יפעיל את הפקודה
    if(!firstLoad && endScreen){
      setPage(page+1)
    }
    setFirstLoad(false);
    // לנסות לעשות שמגיעים לסוף הדף 
    // שיציג את ה10 הסרטונים הביאם שיתווספו לרשימה
  },[endScreen])

  const doApi = async() => {
    let url = "https://www.omdbapi.com/?s=lego&apikey=5a292f28&page="+page;
    let resp = await axios.get(url);
    console.log(resp.data.Search)
    console.log(ar);
    setAr([...ar,...resp.data.Search])
    // מחזיר את הטוגל של בדיקה אם אנחנו בסוף העמוד הגלילה
    // בחזרה לפולס
    endScreenEnd();
  }


  return (
    <div className='container'>
      <h1>List of movies:</h1>
      <div className="row">
        {ar.map(item => {
          return(
            <div key={item.imdbID} className="col-md-8 p-3 border">
              <img src={item.Poster} alt="movie" className='col-4 float-start me-3'/>
              <h2>{item.Title}</h2>
              <div>Date:{item.Year}</div>
            </div>
          )
        })}
        {endScreen && <h3>loading...</h3>}
      </div>
    </div>
  )
}
