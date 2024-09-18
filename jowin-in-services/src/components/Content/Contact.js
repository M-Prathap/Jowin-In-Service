import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <div className="container">
        <form>
          <h3>Name</h3>
          <input type="text" name="name" placeholder="ENTER YOUR NAME" required />
          <h3>Email Address</h3>
          <input type="email" name="email" placeholder="ENTER YOUR EMAIL ID" required />
          <h3>Age</h3>
          <input type="text" name="Age" placeholder="ENTER YOUR AGE" required />
          <h3>Years of experience</h3>
          <input
            type="text"
            name="experience"
            placeholder="ENTER YOUR RELEVENT YEARS OF EXPERIENCE"
            required
          />
          <h3>Select the role</h3>
          <select name="role" required>
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="HR Recruiter">HR Recruiter</option>
            <option value="HT-Recruiter Freelancer">
              HT-Recruiter Freelancer
            </option>
            <option value="Sales Officer/Relationship Manager">Sales Officer/Relationship Manager</option>
            <option value="Sales Manager/ Relationship Manager">Sales Manager/ Relationship Manager</option>
            <option value="Branch Manager">Branch Manager</option>
          </select>
          <input type="file" name="resume" accept=".pdf, .doc, .docx" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
