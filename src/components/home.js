import React, { useEffect, useState } from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'

import "./style/home.css"

function Home() {

  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi("batman")
  },[]);

  const doApi = async(_searchQ) => {
    let myUrl = `http://www.omdbapi.com/?s=${_searchQ}&apikey=5a292f28`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    setAr(data.Search)
  }
  return (
    <React.Fragment>
        <VodStrip/>
        <VodInput/>
        <VodList vod_ar={ar}/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home