import React, {useState, useRef} from 'react'
import "./PostShare.scss"
import ProfileImage from "../../img/profileImg.jpg"
import { Button } from '@mantine/core'

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef(null)

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    } 

  return (
    <div className="PostShare">
        <div className='InputShare'>
            <img src={ProfileImage} alt="profile" />
            <input type="text" placeholder='Donnezde vos nouvelles'/>
            <button className='btn btn-primary'> Post </button>
        </div>
        <div className="postOptions">
            <div className="option" 
            onClick={() => imageRef.current.click()}
            >
                <i className="uil uil-scenery"></i>
                Photo
            </div>
            <div className="option">
                <i className="uil uil-video"></i>
                Vidéo
            </div>
            <div className="option">
                <i className="uil uil-map"></i>
                Lieu
            </div>
            <div className="option">
                <i className="uil uil-share"></i>
                Partager
            </div>
            <div style={{display: "none"}}>
                <input type="file" name='myImage' ref={imageRef}  onChange={onImageChange} />
            </div>

        </div>
        <div>
            {image && (
                <div className="previewImage">
                    <i onClick={()=>setImage(null)} className="uil uil-times"></i>
                    <img src={image.image} alt="votre image" />
                </div>
            )}
        </div>
    </div>
  )
}

export default PostShare