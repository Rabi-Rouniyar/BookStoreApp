import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from './Login';
import Logout from "./Logout";

function Navbar() {

    const [sticky,setSticky]=useState("false")
    useEffect(()=>{
        const handleScroll=()=>{
            console.log('scrollY:', window.scrollY);
            if(window.scrollY>0){
                setSticky(true)
            }
            else{
                setSticky(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    const navItems=(
<>
 <li>
        <a href='/'>Home</a>
      </li>
       <li>
        <a href='/course'>Course</a>
      </li>
       <li>
        <a>Contact</a>
      </li>
       <li>
        <a>About</a>
      </li>
</>
    )
  return (
    <>
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky?
        "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""
    }`} >
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            { navItems}
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer">BookStore</a>
  </div>
  <div className='navbar-end space-x-3'>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className='hidden md:block'>
  <label className="input px-3 py-2 border-none outline-none">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
</div>
  <div >
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
      onClick={()=>
      document.getElementById("my_modal_3").showModal()}>
      Login</a>
      <Login/>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default Navbar