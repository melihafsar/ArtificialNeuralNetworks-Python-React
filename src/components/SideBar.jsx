import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { logout, auth } from '../firebase/firebaseConfig';
import { useAuth } from '../context/AuthContext';
import logo from '../static/TeknolojiF.png';
import { useEffect } from 'react';

const sideBarInfo = [
    { link: "/homepage", i_className: "bx bx-grid-alt", categoryName: "Obje Tanıma Modeli" },
    { link: "/contacts", i_className: "bx bx-envelope", categoryName: "İletişim" },
    { link: "/profile", i_className: "bx bx-cog", categoryName: "Kullanıcı Ayarları" },
    { link: "https://takvim.marmara.edu.tr/", i_className: "bx bx-calendar", categoryName: "Akademik Takvim" },
    { link: "https://bys.marmara.edu.tr/v2", i_className: "bx bx-data", categoryName: "BYS Sistemi" },
];

function SideBar() {
    const [sideBar, setSideBar] = useState(true);
    const { setUser, setUserInfo, userInfo } = useAuth();

    const getUserInfo = () => {
        const user = auth.currentUser;
        if (user !== null) {
            setUserInfo(user.providerData[0]);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    const navigate = useNavigate();

    async function handleLogOut() {
        await logout();
        setUser(false);
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
                    }} className={sideBar ? "bx bx-menu" : "bx bx-menu-alt-right "} id="btn"></i>
                </div>
                <ul className="nav-list">
                    {
                        sideBarInfo.map((info, item) => {
                            return (
                                <div key={item}>
                                    <li >
                                        {
                                            item < 3 ?
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
                                <div className="name">{userInfo.displayName}</div>
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