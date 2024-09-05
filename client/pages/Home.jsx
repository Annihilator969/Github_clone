import React, { useState, useEffect } from "react";
import "./Home.css";

export const Home = ({ expertise, reliability }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images
  const images = [
    "/images/software.png",
    "/images/engineer.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);  
    };
  }, []);  

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>CSE Engineering From NIT DELHI</p>
              <h1>Welcome to Manikanta's World</h1>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src={images[currentImageIndex]}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

   
<div className="expertise-reliability-container">
  <div className="container container-wide">
    <div className="expertise-reliability-block">
      <div className="about-block">
        <h2>Expertise</h2>
        <p>{expertise}</p>
      </div>
      <div className="about-block">
        <h2>Reliability</h2>
        <p>{reliability}</p>
      </div>
    </div>
  </div>
</div>


      
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src={images[currentImageIndex]}
              alt="coding together"
              width="50%"
              height="400"
            />
          </div>

          <div className="hero-content">
            <p> </p>
            <h1>Get Started Today</h1>
            <p></p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};