import React from 'react'
import "./Auth.scss"

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <h1>Festiv'App</h1>
            <h5>Le réseau social pour les passionnés  de  festivals</h5>
        </div>

        <SignUp/>
        {/* <LogIn/> */}
    </div>
  )
}

function LogIn() {
    return(
        <div className="a-right">
            <form className="infoForm login">
                <h3>Connexion</h3>
                <div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            className="infoInput" 
                            placeholder='Email' 
                            name='email'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Mot de passe</label>
                        <input 
                            type="password" 
                            className="infoInput" 
                            placeholder='Mot de passe' 
                            name='password'
                        />
                    </div>
                </div>
                <button type="submit" className='btn btn-primary'>Connexion</button>
                <div>
                    <span>Vous n'avez pas de compte ? <a href="">Inscrivez vous.</a> Inscrivez vous. </span>
                </div>
                
            </form>
        </div>
    )
}

function SignUp() {
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Inscription</h3>
                <div>
                    <div>
                        <label htmlFor="">Prénom</label>
                        <input
                            type="text"
                            placeholder='Prénom' 
                            className='infoInput' 
                            name="firstname"
                        />
                    </div>
                    <div>
                    <label htmlFor="">Nom</label>
                        <input
                            type="text"
                            placeholder='Nom' 
                            className='infoInput' 
                            name="lastname"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Pseudo</label>
                        <input 
                            type="text" 
                            className="infoInput" 
                            placeholder='Pseudo' 
                            name='username'
                        />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            className="infoInput" 
                            placeholder='Email' 
                            name='email'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Mot de passe</label>
                        <input 
                            type="password" 
                            className="infoInput" 
                            placeholder='Mot de passe' 
                            name='password'
                        />
                    </div>
                    <div>
                        <label htmlFor="">Confirmation de mot de passe</label>
                        <input 
                            type="password" 
                            className="infoInput" 
                            placeholder='Confirmer le mot de passe' 
                            name='confirmpass'
                        />
                    </div>
                </div>
                <button type="submit" className='btn btn-primary'>S'inscrire</button>
                <div>
                    <span>Vous avez déjà un compte ?  <a href="">Connectez vous.</a>  </span>
                </div>
                
            </form>
        </div>
    )
}

export default Auth