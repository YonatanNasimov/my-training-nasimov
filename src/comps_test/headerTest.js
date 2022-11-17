import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import {BsAlarmFill} from "react-icons/bs"


export default function HeaderTest() {

  const onToastShowClick = () => {
    toast.error("hello from toast message 777 ")
  }
  return (
    <header className='container-fluid admin-header bg-warning'>
    <div className="container ">
      <div className="row align-items-center">
        <div className="logo col-auto">
          <h2>
            {/* אייקון נחמד */}
            <BsAlarmFill style={{color:"red"}} />
            Test panel</h2>
        </div>
        <nav className='d-flex col justify-content-between align-items-center'>
        
          <ul className='nav'>
            <li>
              <Link to="/test/upload">upload test</Link>
            </li>
            <li>
              <Link to="/test/ownHook">hook 1</Link>
            </li>
            <li>
              <Link to="/test/lazy1">lazy 1</Link>
            </li>
            <li>
              <Link to="/test/lazyApi">lazy api</Link>
            </li>
          </ul> 
          <button onClick={onToastShowClick}>check toaster message</button>
        </nav>
      </div>
    </div>
  </header>
  )
}
