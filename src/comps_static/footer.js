import React from 'react'

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{ minHeight: "48px" }} className='container-fluid bg-dark p-2 text-white text-center'>
            <div className='container'>
                Made by Yehonatan Nasimov {year} ©
            </div>
        </footer>
    )
}
