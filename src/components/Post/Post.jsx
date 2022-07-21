import React from 'react'
import "./Post.scss";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({data}) => {
  return (
    <div className="Post">
        <div className="PostInfos">
            <img src={data.profile} alt=""/>
            <div className='UserDetailContainer'>
                <div className='UserDetail'> 
                    <span><b>{data.fullname}</b></span>
                    <div>
                        <i className="uil uil-map-pin"></i> <span>{data.place}</span>
                    </div>
                </div>
            </div>
        </div>
        <img src={data.img} alt="image de post" />

        <div className="postReact">
            <div>
                {data.liked ? ( <FontAwesomeIcon className="LikedHeart" icon={faHeart} /> ) : ( <i class="uil uil-heart"></i> )}
                <i class="uil uil-comment-dots"></i>
                <i class="uil uil-share-alt"></i>
            </div>
            <i class="uil uil-bookmark"></i>
        </div>

        <span>{data.likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post