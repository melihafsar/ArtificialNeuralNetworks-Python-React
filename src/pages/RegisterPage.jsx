import React from 'react'
import FormRegister from '../components/FormRegister';
import Icon from "../static/marmaraLogo.png";

function RegisterPage() {
    return (
        <>
            <div className='form-section'>
                <a className="logo" href="/">
                    <img src={Icon} alt="Marmara Logo" />
                </a>
                <div className='form-layout'>
                    <h1 className="form-title" style={{ color: "white", paddingTop : "1%", textDecoration:"none"}}>Teknoloji Fakültesi Yapay Sinir Ağları</h1>
                    <FormRegister />
                </div>
            </div>
        </>
    )
}

export default RegisterPage