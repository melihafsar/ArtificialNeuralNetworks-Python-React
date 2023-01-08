import React from 'react'
import Uploader from '../components/Uploader';
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">Obje Tanıma Modeli</div>
        <Uploader/>
      </section>


    </>
  )
}

export default HomePage
