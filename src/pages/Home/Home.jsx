import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

import heroBanner from '../../assets/hero_banner.jpg';
import heroTitleImage from '../../assets/hero_title.png';
import playIcon from '../../assets/play_icon.png';
import infoIcon from '../../assets/info_icon.png';
import Titlecard from '../../components/TitleCards/Titlecard';

const Home = () => {
  return (
   <div id='netflix-home'>

 <div 
      className="netflix-hero-container" 
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <Navbar />

      <div className="hero-content-overlay">
        <div className="info-box">
          
          <img src={heroTitleImage} alt="The Protector Title" className="hero-title-img" />
          
          <p className="hero-description">
            Discovering his ties to a secret ancient order, a young man living in modern 
            Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-play">
              <img src={playIcon} alt="" className="btn-icon-img" /> Play
            </button>
            <button className="btn-info">
              <img src={infoIcon} alt="" className="btn-icon-img" /> More Info
            </button>
          </div>
        </div>
      </div>

      <div className="bottom-vignette"></div>
      </div>
       <div className="home-browsing-rows">
        <Titlecard />
        <Titlecard title="Now Playing" category="now_playing"/>
        <Titlecard title="Blocbuster Movies" category="popular"/>
        <Titlecard title="Top Rated" category="top_rated"/>
        <Titlecard title="Trendings" category="upcoming"/>

      </div>

   </div>
  );

}

export default Home;