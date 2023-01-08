import React from 'react'
import FormLogin from '../components/FormLogin';
import Icon from "../static/marmaraLogo.png";

function LoginPage() {
  return (
    <>
      <div className='form-section'>
        <div className="login-container" >
            <a className="logo" href="/">
              <img className="mainLogoSize" src={Icon} alt="Marmara Logo" />
            </a>
            <div className='form-layout'>
              <h1 className="login-title">Teknoloji Fakültesi<br/>Yapay Sinir Ağları</h1>
              <FormLogin />

            </div>
          </div>
      </div>
    </>
  )
}

export default LoginPage