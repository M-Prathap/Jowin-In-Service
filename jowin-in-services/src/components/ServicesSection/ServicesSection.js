import React from "react";
import "./ServicesSection.css";
import ServicesImage from "../../assets/jowin-3.png";

const ServicesSection = () => {
  return (
    <section className="services">
      <h2>Best HR Consultancy with Staffing Solutions</h2>
      <div className="services-container">
        <p>
          As a Staffing Agency with an experienced staffs, we have come across
          clients with all types of requirements. These opportunities of working
          with different types of clients have helped us in understanding that
          every company has its own core ethics, values, culture and
          expectations from employees. We are experts in designing tailored
          solutions for your company and tracking down talent that best meets
          your needs. Some of the Staffing Solutions that we provide in the
          listed below :
        </p>

        <div className="list">
          <ol>
            <li>Recruitment and staffing</li>
            <li>Training and development</li>
            <li>Compensation and benefits</li>
            <li>HR Information And Management System</li>
            <li>Health Safety</li>
            <li>Payroll System</li>
          </ol>
        </div>
        <div className="explore-button">
        <a href className="explore-btn">
          Enquire Now
        </a>
        </div>
      </div>
      <img
        src={ServicesImage}
        alt="Services Illustration"
        className="services-img"
      />
    </section>
  );
};

export default ServicesSection;
