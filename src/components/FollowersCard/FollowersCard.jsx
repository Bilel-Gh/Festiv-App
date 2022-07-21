import React from 'react'
import "./FollowersCard.scss"

import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3> Qui vous suit ? </h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img className="followerImage" src={follower.img} alt={follower.name} />
              <div className="name">
                <span> {follower.name}</span>
                <span> {follower.username}</span>
              </div>
            </div>
            <button className='btn'>
              Follow
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard