import React from 'react'
import SideBar from '../components/SideBar'

function Contacts() {
  return (
    <div>
      <SideBar />
      <section className="home-section">
        <div className="text">İletişim Kanallarımız</div>

        <div className="container-creator">
          <div className="creator-card-wrapper">
            <div className="creator-card">
              <div className="creator-card-image">
                <img src="" alt="profile one"/>
              </div>
              <ul className="creator-social-icons">
                <li>
                  <a href="www.google.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="www.google.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="www.google.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="www.google.com">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>

              <div className="creator-details">
                <h2>Melih Afşar
                  <br/>
                    <span className="job-title">WEB Developer</span>
                </h2>
              </div>
            </div>
          </div>
        </div>



      </section>
    </div>
  )
}

export default Contacts
