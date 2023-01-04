import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../firebase/firebaseConfig';
import { useAuth } from '../context/AuthContext';


function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const userInfo = await login(email, password);

    setEmail('');
    setPassword('');

    if (userInfo) {
      setUser(true);
      navigate('/homepage');
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form login">
        <h1 className="form-title">Oturum Aç</h1>
        <div className="form-group">
          <input className="form-group-input" type="text" value={email} placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} />
          <label className="form-group-label">Email</label>
        </div>
        <div className="form-group">
          <input className="form-group-input" name="password" type={passwordShow ? "text" : "password"} value={password} placeholder={"******"} onChange={(e) => setPassword(e.target.value)} />
          <label className="form-group-label">Şifre</label>
        </div>
        <div className='container'>
          <input type="checkbox" onClick={togglePassword} />
          <h5>Şifreyi Göster</h5>
        </div>
        <button className="form-sign-in" type="submit">Oturum Aç</button>
        <br />
      </form>
    </>
  )
}

export default FormLogin