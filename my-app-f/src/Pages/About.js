import React from "react";

const About = () => {
  return (
    <section className="about-page">
      <h1>About Us</h1>
      <p>
        (Company Name) is a company dedicated to (company mission statement). We
        are passionate about (company values or areas of expertise).
      </p>
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          (Describe the company's origins, founding members, or key milestones).
        </p>
        <h2>Our Team</h2>
        <div className="team-members">
          {/* Add team member profiles here (optional) */}
          {
            /* Example team member profile structure */
            <div className="team-member">
              <img src="path/to/team-member-image.jpg" alt="Team Member Name" />
              <h3>Team Member Name</h3>
              <p>Job Title</p>
              <p>(Brief description of the team member's experience or role)</p>
            </div>
          }
        </div>
        <h2>Our Values</h2>
        <ul>
          <li>(Company value 1)</li>
          <li>(Company value 2)</li>
          <li>(Company value 3)</li>
        </ul>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out to us at:
          <br />
          Email: (company email address)
          <br />
          Phone: (company phone number) (optional)
        </p>
        {/* Add social media links (optional) */}
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/your-company-page">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/your-company-handle">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/your-company-handle">Instagram</a>
          </li>
          {/* Add links for other social media platforms as needed */}
        </ul>
      </div>
    </section>
  );
};

export default About;
