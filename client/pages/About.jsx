import './About.css';
import { useState } from "react";

export const About = ({ onSave }) => {
  const [expertise, setExpertise] = useState("");
  const [reliability, setReliability] = useState("");

  const handleSubmit = () => {
    onSave({ expertise, reliability });
  };

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
            <h1 className="add-about-me-heading">Add About Me</h1>
              <div className="about-block">
                <div>
                  <h2>Expertise</h2>
                  <textarea
                    placeholder="Enter your expertise here (limit: 200 words)"
                    maxLength="200"
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                  ></textarea>
                  <p className="word-count">{expertise.length} / 200 words</p>
                </div>
              </div>
              <div className="about-block">
                <h2>Reliability</h2>
                <textarea
                  placeholder="Enter your reliability here (limit: 200 words)"
                  maxLength="200"
                  value={reliability}
                  onChange={(e) => setReliability(e.target.value)}
                ></textarea>
                <p className="word-count">{reliability.length} / 200 words</p>
              </div>
              <div className="btn btn-group">
                <button className="btn" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/aboutme.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};