import React from 'react'
import FormLogin from '../components/FormLogin';
import Icon from "../static/marmaraLogo.png";

function LoginPage() {
  return (
    <>
      <div className='form-section'>

        <a className="logo" href="/">
          <img src={Icon} alt="Marmara Logo" />
        </a>
        <div className='form-layout'>
          <h1 className="form-title" style={{color: "white",textDecoration: 'none' }}> Bilgisayar Mühendisliği Bölüm Yönetim Platformu</h1>
          <FormLogin />

        </div>
      </div>
    </>
  )
}

export default LoginPage