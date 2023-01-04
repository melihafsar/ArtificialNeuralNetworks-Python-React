import React from 'react'
import Uploder from '../components/Uploder';
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">Obje Tanıma Modeli</div>
        <Uploder/>
      </section>


    </>
  )
}

export default HomePage
