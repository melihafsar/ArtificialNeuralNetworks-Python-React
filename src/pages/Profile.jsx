import React, { useState } from 'react'
import SideBar from "../components/SideBar";
import { useAuth } from '../context/AuthContext';
import userImage from '../static/user.png';
import { logout, auth, updateNewPassword, updateUser } from '../firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";

function Profile() {
  const { setUser, setUserId } = useAuth();
  const currentUser = auth.currentUser;
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(currentUser.providerData[0].photoURL || '');

  async function handleLogOut() {
    await logout();
    setUser(false);
    setUserId(0);
    sessionStorage.clear();
    navigate('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNewPassword(currentUser, password);
    updateUser({photoURL : avatar});
    setPassword("");
    handleLogOut();
  }

  const info = [
    {
      title: "İsim ve Soyisminiz:",
      value: `${currentUser.providerData[0].displayName}`
    },
    {
      title: "En son giriş:",
      value: `${currentUser.metadata.lastSignInTime}`
    },
    {
      title: "Email:",
      value: `${currentUser.providerData[0].email}`
    }
  ];
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">Profiliniz</div>
        <div className="profile-div">
          <div className='profile-image-div'>
            <div className="profile-image">
              {avatar ? <img src={avatar} style={{maxWidth:"150px", borderRadius: "999px" }} alt="user" /> : <img src={userImage} alt="user" />}
            </div>
          </div>

          <div className="profile-info">
            {info.map((item, index) => {
              return (
                <div className="profile-info-item" key={index}>
                  <div className="profile-info-key">{item.title}</div>
                  <div className="profile-info-value">{item.value}</div>
                </div>
              )
            })}
          </div>
          <h4>Bilgilerini Güncelle:</h4>
          <form onSubmit={handleSubmit}>
            <br />
            <label> Yeni Şifreniniz :
              <input
                type="text"
                style={{ 
                  width: "100%",
                  height: "30px", fontSize: "20px", padding: "5px", margin: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <label> Yeni Profil Resminiz İçin URL:
              <input
                type="text"
                style={{ 
                  width: "100%",
                  height: "30px", fontSize: "20px", padding: "5px", margin: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar}
              />
            </label>
            <div className='form-button-container'>
              <button className='form-button button-update' type="submit">Güncelle</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Profile
