import React from 'react'
import "./ProfileCard.scss"

import Cover from '../../img/cover3.png'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {

    const ProfilePage = true;
  return (
    <div className="ProfileCard">
        <div className="ProfileImages ">
            <div className="CoverContainer"> 
                <img src={Cover} alt="Cover" />
            </div>
            <img src={Profile} alt="Profile" />
        </div>

        <div className="ProfileName">
            <span>Johnna Doe</span>
            <span>Festivalière</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>4,240</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>6</span>
                    <span>Followers</span>
                </div>
                {ProfilePage && (
                    <>
                        <div className="vl"></div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                    </>
                )}
            </div>
            <hr />
        </div>

        <span>
            <i className="uil uil-user-circle"> </i>
            Mon Profile
        </span>
    </div>
  )
}

export default ProfileCard