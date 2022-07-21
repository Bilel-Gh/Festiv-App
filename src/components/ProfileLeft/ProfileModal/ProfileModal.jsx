import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModal.scss"

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened = {modalOpened}
      onClose = {() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Vos Information</h3>

        <div>
            <div>
                <label htmlFor="">Prénom</label>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="FirstName" 
                    placeholder='Prénom'
                />
            </div>
            <div>
                <label htmlFor="">Nom</label>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="LastName" 
                    placeholder='Nom'
                />
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="">Metier</label>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="Metier" 
                    placeholder='Metier'
                />
            </div>
            <div>
                <label htmlFor="">Ville</label>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="Ville" 
                    placeholder='Ville'
                />
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="">Age</label>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="Age" 
                    placeholder='Age'
                />
            </div>
            <div>
                <label htmlFor="">Festival préféré</label>
                <input 
                    type="text" 
                    className="infoInput" 
                    name="Festival préféré" 
                    placeholder='Festival préféré'
                />
            </div>
        </div>
        <div className='changeFile'>
            <label htmlFor=""><b>Image de profil</b></label>
            <input type="file" name='profileImg' />
            <label htmlFor=""><b>Image de couverture</b></label>
            <input type="file" name='coverImg' />
        </div>

        <button className='btn btn-primary' >Modifier</button>
      </form>
    </Modal>
  );
}

export default ProfileModal