import React from 'react'
import "./RightSide.scss"

import profile from '../../img/profile3.png'
import { MessagesData, RequestData } from '../../Data/MessagesData';

const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="messages">
            <div className="heading">
                <h4>Messages</h4><i className="uil uil-edit"></i>
            </div>
            {/*  SEARCH BAR */}
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder="Cherchez un message" id="message-search" />
            </div>
            {/* MESSAGE CATEGORY */}
            <div className="category">
                <h6 className="active">Primary</h6>
                <h6>General</h6>
                <h6 className='message-requests'>Request(7)</h6>
            </div>
            {/* MESSAGES */}
            {MessagesData.map((message, id) => {
                return (
                    <div className="message">
                        <div className="profile-picture">
                            <img src={message.img} alt="iconProfile" />
                            <div className={message.isActive ? "active" : null}></div>
                        </div>
                        <div className="message-body">
                            <h5>{message.name}</h5>
                            <p className="text-bold">{message.message}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        {/* DEMANDE D'AMIS */}
        <div className="friend-requests">
            <h4 className='text-muted'>Demandes</h4>
            {RequestData.map((request, id) => {
                return (
                    <div className="request">
                    <div className="info">
                        <div className="profile-picture">
                            <img src={request.img} alt="iconProfile" />
                        </div>
                        <div>
                            <h5>{request.name}</h5>
                            <p className="text-muted">
                                {request.message}
                            </p>
                        </div>
                    </div>
                    <div className="action">
                        <button className="btn btn-primary">Accepter</button>
                        <button className="btn">Refuser</button>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default RightSide