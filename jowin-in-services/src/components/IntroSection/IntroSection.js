import React from "react";
import "./IntroSection.css";
import HeadImage from "../../assets/jowin-2.jpg";

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <h1>Jowin HR Services</h1>
        <p>
          Excel your business with professional HR consultancy services. HR
          services hold various range of functions aimed at managing an
          organization’s workforce. These include recruiting and hiring
          employees, onboarding, providing training and development
          opportunities, managing performance, and administering remuneration
          and perks. HR services also involve addressing employee relations,
          ensuring compliance with labor laws, and maintaining HR information
          systems to manage employee data efficiently.
          <br />
          <br />
          In short, HR services are essential for attracting, developing, and
          retaining talent while promoting a productive work environment. Having
          a strong HR strategy is crucial for organizational success, no matter
          how small or how large your business is. Effective human resource
          management can make a significant difference in achieving your
          business goals. HR consultancy services offer specialized expertise to
          help businesses optimize their HR practices, ensuring a motivated and
          productive workforce.
        </p>
        <a href className="explore-btn">
          Explore More
        </a>
      </div>

      <img
        src={HeadImage}
        alt="Services Illustration"
        className="intro-image"
      />
    </section>
  );
};

export default IntroSection;
