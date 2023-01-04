import React, { useEffect, useState } from 'react'
import SideBar from "../components/SideBar";
import { useAuth } from '../context/AuthContext';
import userImage from '../static/user.png';
import { successAlert, errorAlert } from '../helpers/AlertHelper';
import { logout, auth } from '../firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { updateNewPassword } from '../firebase/firebaseConfig';

function Profile() {
  const { setUser, setUserId, userId } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const lastSignIn = sessionStorage.getItem('lastSignIn');
  const userMail = sessionStorage.getItem('userMail');
  const currentUser = auth.currentUser;

  const [phone, setPhone] = useState("");
  const [room_no, setRoom_no] = useState("");
  const [degree, setDegree] = useState("");
  const [password, setPassword] = useState("");

  async function updateProfile() {
    const form_data = new FormData();
    form_data.append('phone', phone);
    form_data.append('room_no', room_no);
    form_data.append('degree', degree);

    // try {
    //   await axios.put(`http://localhost:3000/person_info/update/:${userId}`, form_data,
    //     {
    //       headers: form_data.getHeaders ? form_data.getHeaders() : { 'Content-Type': 'application/json' }
    //     });
    //   successAlert("Bilgileriniz başarıyla güncellendi");
    // } catch (error) {
    //   console.error(error);
    //   errorAlert("Bilgileriniz güncellenemedi");
    //   return Promise.reject(error);
    // }
  }

  const handleGetUserInfo = async () => {
    if (userInfo.name === undefined || userInfo.name === null) {
      //const text = `http://localhost:3000/person_info/personID/:${userId}`;
      // await axios.get(text)
      //   .then(response => {
      //     setUserInfo(response.data);
      //     setDegree(response.data.degree);
      //     setPhone(response.data.phone);
      //     setRoom_no(response.data.room_no);
      //   })
      //   .catch(error => { console.error(error); return Promise.reject(error); });
    }
  }

  const navigate = useNavigate();

  async function handleLogOut() {
    await logout();
    setUser(false);
    setUserId(0);
    sessionStorage.clear();
    navigate('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setPassword("");
    updateNewPassword(currentUser, password);
    updateProfile();
    handleLogOut();
  }

  handleGetUserInfo();
  useEffect(() => {
  }, [])


  const info = [
    {
      title: "İsim ve Soyisminiz:",
      value: `${userInfo.name} ${userInfo.surname}`
    },
    {
      title: "Ünvanınız:",
      value: userInfo.degree
    },
    {
      title: "En son giriş:",
      value: lastSignIn
    },
    {
      title: "Email:",
      value: userMail
    },
    {
      title: "Telefon:",
      value: userInfo.phone
    },
    {
      title: "Oda No:",
      value: userInfo.room_no
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
              <img src={userImage} alt="user" />
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
            <label>Telefon No:
              <input
                type="text"
                defaultValue={phone}
                style={{ width: "100%" }}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <br />

            <label>Oda Numaranız :
              <input
                type="text"
                defaultValue={room_no}
                style={{ width: "100%" }}
                onChange={(e) => setRoom_no(e.target.value)}
              />
            </label>
            <br />

            <label> Ünvanınız :
              <input
                type="text"
                defaultValue={degree}
                style={{ width: "100%" }}
                onChange={(e) => setDegree(e.target.value)}
              />
            </label>
            <br />

            <label> Yeni Şifreniniz :
              <input
                type="text"
                style={{ width: "100%" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <div className='form-button-container'>
              <button className='form-button' type="submit">Güncelle</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Profile
