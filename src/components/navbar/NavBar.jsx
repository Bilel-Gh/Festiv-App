import React from 'react'
import "./NavBar.scss"
import profileImage from "../../img/profileImg.jpg"

const NavBar = () => {
  return (
    <nav>
        <div className="container"> 
        <h1 className="logo">
            Festiv'App
        </h1>
        <div className="search-bar">
            <i className="uil uil-search"></i>
            <input type="search" placeholder="Cherchez un Festivalier"/>
        </div>
        <div className="create">
            <label className='btn btn-primary' htmlFor="create-post"> Inscrption </label>
            <div className="profile-picture">
            <img src={profileImage} alt="profile" />
            </div>
        </div>
        </div>
  </nav>
  )
}

export default NavBar