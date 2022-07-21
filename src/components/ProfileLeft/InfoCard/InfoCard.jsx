import React from 'react'
import "./InfoCard.scss"
import ProfileModal from "./../ProfileModal/ProfileModal"

const InfoCard = () => {

    const [modalOpened, setModalOpened] = React.useState(false);
  return (
    <div className="InforCard">
        <div className="infoHead">
            <h4>Vos informations</h4>
            <div>
                <i className="uil uil-edit-alt" onClick={()=>setModalOpened(true)} ></i>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>

        <div className="info">
            <span>
                <b>Metier : </b>
                <span>Festivalier</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Ville : </b>
                <span>Paris</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Age : </b>
                <span>23 ans</span>
            </span>
        </div>
        <div className="info">
            <span>
                <b>Festival préféré : </b>
                <span>Solidays</span>
            </span>
        </div>

        <button className='btn btn-primary'>Déconnexion</button>
    </div>
  )
}

export default InfoCard