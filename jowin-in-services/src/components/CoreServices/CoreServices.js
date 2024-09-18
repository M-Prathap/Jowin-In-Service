import React from "react";
import "./CoreServices.css";
import CoreServices1 from "../../assets/Coreservice1.png";
import CoreServices2 from "../../assets/Coreservice2.png";

const CoreServices = () => {
  return (
    <section className="core-services">
      <h2>Core Services</h2>
      <div className="container">
        <div className="core-services-items">
          <div className="service">
            <img src={CoreServices1} alt="Services Illustration" />
            <h3>Placement Services</h3>
            <p>
              HR placement services, assist recruiters in staffing, recruiting,
              and providing training opportunities. We assist in recruitment
              through job posting, career fairs, and agencies, screening
              candidates through resume review, interviews, and background
              checks, and facilitating smooth onboarding for new hires.
            </p>
          </div>
          <div className="service">
            <img src={CoreServices2} alt="Services Illustration" />
            <h3>Contract Staffing</h3>
            <p>
              Contract staffing is a strategic approach that allows companies to
              hire temporary employees for specific tasks or periods, allowing
              them to maintain flexibility, control costs, and access skills.
              Contract staffing consultants bridge the gap between employers and
              temporary employees.
            </p>
          </div>
          <div className="service">
            <img src={CoreServices2} alt="Services Illustration" />
            <h3>Payroll</h3>
            <p>
              Manage your company's payroll effortlessly with our comprehensive
              payroll services. We ensure accurate and timely payment to your
              employees, handle tax withholdings, and maintain compliance with
              all relevant regulations. Our efficient payroll solutions reduce
              administrative tasks, allowing you to focus on your core business
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
