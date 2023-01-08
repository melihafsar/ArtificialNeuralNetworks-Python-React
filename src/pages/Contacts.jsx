import React from 'react'
import SideBar from '../components/SideBar'
import AfsarPhoto from '../static/melihafsar2.jpg'
import SagandaPhoto from '../static/aesaganda.jpeg'
import EsePhoto from '../static/emirhanese.jpeg'
import AslancanPhoto from '../static/osmanaslancan.jpeg'

const data = [
  {
    name: 'Melih Afşar',
    job: 'Web Developer',
    image: AfsarPhoto,
    linkedin: 'https://www.linkedin.com/in/melih-af%C5%9Far-0a8565220/?originalSubdomain=tr',
    github: 'https://github.com/MelihAfsar',
    instagram: 'https://www.instagram.com/mafsar42/',
    mail: 'mailto:melihafsar@marun.edu.tr',
  },
  {
    name: 'Aziz Eren Sağanda',
    job: 'Devops Engineer ',
    image: SagandaPhoto,
    linkedin: 'https://www.linkedin.com/in/aziz-eren-sa%C4%9Fanda-893619137/?toriginalSubdomain=tr',
    github: 'https://github.com/aesaganda',
    instagram: 'https://www.instagram.com/st.saganda/',
    mail: 'mailto:aesaganda@marun.edu.tr',
  },
  {
    name: 'Emirhan Ese',
    job: 'Backend Developer',
    image: EsePhoto,
    linkedin: 'https://www.linkedin.com/in/emirhan-ese/?originalSubdomain=tr',
    github: 'https://github.com/emirhanese',
    instagram: 'https://www.instagram.com/ese.emirhan/',
    mail: 'mailto:emirhanese@marun.edu.tr',
  },
  {
    name: 'Osman Aslancan',
    job: 'Backend Developer',
    image: AslancanPhoto,
    linkedin: 'https://www.linkedin.com/in/osmanaslancan/?originalSubdomain=tr',
    github: 'https://github.com/osmanaslancan',
    instagram: 'https://www.instagram.com/osm4naslancan/',
    mail: 'mailto:osmanaslancan@marun.edu.tr',
  }
]



function Contacts() {
  return (
    <div>
      <SideBar />
      <section className="home-section">
        <div className="text">İletişim Kanallarımız</div>

        <div className="container-creator">

          {
            data.map((item, index) => {
              return (
                  <div key={index} className="creator-card-wrapper">
                    <div className="creator-card">
                      <div className="creator-card-image">
                        <img src={item.image} alt="profile one" />
                      </div>
                      <ul className="creator-social-icons">
                        <li>
                          <a href={item.linkedin}>
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href={item.github}>
                            <i className="bx bxl-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href={item.instagram}>
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href={item.mail}>
                            <i className="bx bx-envelope"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="creator-details">
                        <h2>{item.name}
                          <br />
                          <span className="job-title">{item.job}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
              )
            }
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Contacts
