import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Service.css";

export const Service = () => {
  const addService = () => {
    const newService = {
      title: "New Service",
      image: "/images/placeholder.png",
      link: "/services/new",
    };
    setServices([...services, newService]);
  };

  const [services, setServices] = useState([
    {
      title: "Full Stack Development",
      image: "./images/fullstackd.png",
      link: "/services/fullstack",
    },
    {
      title: "Data Structures and Algorithms (DSA)",
      image: "./images/DSA.png",
      link: "/services/dsa",
    },
    {
      title: "Front-end Development",
      image: "./images/frontend.png",
      link: "/services/frontend",
    },
    {
      title: "Backend Development",
      image: "/images/backend.png",
      link: "/services/backend",
    },
    {
      title: "Android Development",
      image: "./images/Android.png",
      link: "/services/android",
    },
  ]);

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="containers">
            {services.map((service, index) => (
              <div className="service-boxs" key={index}>
                <h2>{service.title}</h2>
                <div className="image-containers">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="400"
                    height="300"
                  />
                </div>
                <div className="actions">
                  <NavLink to="/contact">
                    <button className="btn">Connect Now</button>
                  </NavLink>
                  <NavLink exact to={service.link}>
                    Learn More
                  </NavLink>
                </div>
              </div>
            ))}
            <div className="add-service" onClick={addService}>
              <span>ADD</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};