import React from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'

import "./style/home.css"

function Home() {
  return (
    <React.Fragment>
        <VodStrip/>
        <VodInput/>
        <VodList/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home