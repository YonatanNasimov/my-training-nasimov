import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style/home.css"

export default function Home() {
    const nav = useNavigate();



    return (
        <div style={{ backgroundImage: "url(images/cover.jpg)" }} className='container-fluid text-white'>
            <div className='container py-5 text-center'>
                <div className='col-md-8 mx-auto myBg1 h-75'>
                    <h1 className='display-4 text-danger'>Welcome to my app! <br/>The app that organizes your training.</h1>
                    <div className='text-dark'>
                        <h3>A little about me and the app:</h3>
                        <p className='p-1'>
                            I'm Yehonatan Nasimov, I live in Ashkelon, I'm a full stack developer and I built an application
                            that organizes your training and arranges the training for you according to muscle groups. using React and Redux.
                            Enjoy!
                        </p>
                    </div>
                    <div>
                        <button onClick={() => {
                            nav("/todoList")
                        }} className='btn btn-dark my-3'>START</button>
                    </div>
                    <div className='p-5'>
                        <a title='My Linkdin' href='https://www.linkedin.com/in/yonatan-nasimov-391681248/'><img src='images/linkedin.png' alt='linkdin icon' className='me-3' /></a>
                        <a title='My github' href='https://github.com/YonatanNasimov'><img src='images/github.png' alt='github icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
