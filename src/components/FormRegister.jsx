import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import  { register }  from "../firebase/firebaseConfig";

function FormRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = await register(email, password, name, surname );
        setEmail('');
        setPassword('');
        setName('');
        setSurname('');
        user && navigate('/login',{
            replace: true
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form register">
                <h1 className="form-title">Kayıt Ol</h1>
                <div className="form-group">
                    <input className="form-group-input" type="text" required={true} value={email} onChange={e => setEmail(e.target.value)}/>
                    <label className="form-group-label">Email</label>
                </div>
                <div className="form-group">
                    <input className="form-group-input" type="password" required={true} value={password} onChange={e => setPassword(e.target.value)} />
                    <label className="form-group-label">Şifre</label>
                </div>
                <div className="form-group">
                    <input className="form-group-input" type="text" required={true} value={name} onChange={e => setName(e.target.value)} />
                    <label className="form-group-label">İsim</label>
                </div>
                <div className="form-group">
                    <input className="form-group-input" type="text" required="true" value={surname} onChange={e => setSurname(e.target.value)} />
                    <label className="form-group-label">Soyisim</label>
                </div>
        

                <button disabled={(!email || !password) || (!name || !surname)} className={`form-sign-in`} type="submit">Kayıt Ol</button>
                <div className="form-secondary-cta">
                    <Link className="form-secondary-cta-text form-secondary-cta-text--need-help" to="/">Yardım ister misin?</Link>
                </div>
            </form>
        </div>
    )
}

export default FormRegister