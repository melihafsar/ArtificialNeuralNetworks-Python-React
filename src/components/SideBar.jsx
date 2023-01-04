import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { logout, auth } from '../firebase/firebaseConfig';
import { useAuth } from '../context/AuthContext';
import logo from '../static/TeknolojiF.png';
import axios from 'axios';

const sideBarInfo = [
    { link: "/project-board", i_className: "bx bx-grid-alt", categoryName: "Planlama" },
    { link: "/work-day", i_className: "bx bx-briefcase", categoryName: "Çalışma Günleri" },
    { link: "/contact", i_className: "bx bx-envelope", categoryName: "İletişim" },
    { link: "/my-notes", i_className: "bx bx-note", categoryName: "Notlarım" },
    { link: "/classroom-info", i_className: "bx bx-folder", categoryName: "Derslik Bilgileri" },
    { link: "/profile", i_className: "bx bx-cog", categoryName: "Kullanıcı Ayarları" },
    { link: "https://takvim.marmara.edu.tr/", i_className: "bx bx-calendar", categoryName: "Akademik Takvim" },
    { link: "https://bys.marmara.edu.tr/v2", i_className: "bx bx-data", categoryName: "BYS Sistemi" },
];

function SideBar() {
    const [sideBar, setSideBar] = useState(true);
    const {setUser, setUserId, userId } = useAuth();
    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = () => {
        const user = auth.currentUser;
        if (user !== null) {
            user.providerData.forEach((profile) => {
            sessionStorage.setItem('userMail', profile.email);
            sessionStorage.setItem('lastSignIn', user.metadata.lastSignInTime);
          });
        }
      }

    const handleGetUserInfo = async () => {
        if( userInfo.name === undefined || userInfo.name === null ) {
            const text = `http://localhost:3000/person_info/personInfo/:${userId}`;
            await axios.get(text)
                .then(response => {
                    setUserInfo(response.data);
                })
                .catch(error => { console.error(error); return Promise.reject(error); });
        }    
    }
        getUserInfo();
    useEffect(() => {
    }, [sideBar, userId])

    const navigate = useNavigate();

    async function handleLogOut() {
        await logout();
        setUser(false);
        setUserId(0);
        sessionStorage.clear();
        navigate('/')
    }

    return (
        <div>
            <div className={sideBar ? "sidebar" : "sidebar open"}>
                <div className="logo-details">
                    {
                        !sideBar &&
                        <img src={logo} className="logo_name" alt='' />
                    }
                    <i onClick={() => {
                        setSideBar(!sideBar);
                        handleGetUserInfo();
                    }} className={sideBar ? "bx bx-menu" : "bx bx-menu-alt-right "} id="btn"></i>
                </div>
                <ul className="nav-list">
                    {
                        sideBarInfo.map((info, item) => {
                            return (
                                <div key={item}>
                                    <li >
                                        {
                                            item < 5 ?
                                                (
                                                    <Link to={info.link}>
                                                        <i className={info.i_className}></i>
                                                        <span className="links_name">{info.categoryName}</span>
                                                    </Link>
                                                ) :
                                                (
                                                    <a href={info.link}>
                                                        <i className={info.i_className}></i>
                                                        <span className="links_name">{info.categoryName}</span>
                                                    </a>
                                                )
                                        }
                                        <span className="tooltip">{info.categoryName}</span>
                                    </li>
                                </div>
                            );
                        })
                    }
                    <li className="profile">
                        <div className="profile-details">
                            <div className="name_job">
                                <div className="name">{userInfo.name} {userInfo.surname}</div>
                                <div className="job">{ userInfo.degree }</div>
                            </div>
                        </div>
                        <i className="bx bx-log-out" id="log_out" onClick={handleLogOut}></i>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default SideBar