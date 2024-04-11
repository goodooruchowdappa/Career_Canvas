import React from "react";
import "./about.css"; // Import the CSS file
import sai from "../assets/sai.jpg";
import sharth from "../assets/ShedPro-Hawaii---Elua-Model---Roof-Sidin-Trim-Options-2.gif";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/facebook";
import "react-social-icons/github";
import "react-social-icons/google";
import "react-social-icons/twitter";
import NavBar from "../NavBar";

const About = () => {
  const teamMembers = [
    {
      name: "Chowdappa",
      image: sai, // Replace with your image path
      bio: `MERN full stack developer specializing in crafting intuitive web applications. Proficient in MongoDB, Express.js, React.js, and Node.js. Experienced in building dynamic projects like resume builders. Passionate about creating seamless user experiences and driving innovation in web development.`,
      socialLinks: [
        {
          link: "https://www.google.com/",
          icon: <SocialIcon url="www.instagram.com" />,
        },
        {
          link: "https://www.linkedin.com/in/chowdappa-goodooru-212684298",
          icon: <SocialIcon url="www.linkedin.com" />,
        },
        {
          link: "https://github.com/your-friend-username",
          icon: <SocialIcon url="www.facebook.com" />,
        },
        {
          link: "https://github.com/your-friend-username",
          icon: <SocialIcon url="www.github.com" />,
        },
      ],
    },
    {
      name: "Sharath Chandra",
      image: sharth, // Replace with your friend's image path
      bio: `MERN full stack developer specializing in crafting intuitive web applications. Proficient in MongoDB, Express.js, React.js, and Node.js. Experienced in building dynamic projects like resume builders. Passionate about creating seamless user experiences and driving innovation in web development.`,
      socialLinks: [
        {
          link: "https://your-friend-website.com",
          icon: <SocialIcon url="www.instagram.com" />,
        },
        {
          link: "https://github.com/your-friend-username",
          icon: <SocialIcon url="www.linkedin.com" />,
        },
        {
          link: "https://github.com/your-friend-username",
          icon: <SocialIcon url="www.facebook.com" />,
        },
        {
          link: "https://github.com/your-friend-username",
          icon: <SocialIcon url="www.github.com" />,
        },
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <div className="about-us-container">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          Welcome to our resume builder platform! We are a dynamic team of
          experienced developers dedicated to simplifying the process of
          creating professional resumes. Our mission is to empower individuals
          like you to showcase your unique skills and experiences effectively.
          With a focus on user-centric design and robust functionality, we've
          developed a comprehensive platform that streamlines the
          resume-building process. Whether you're a recent graduate entering the
          workforce or a seasoned professional looking to advance your career,
          our intuitive tools and resources are designed to meet your needs.
          Join us on this journey and unlock the potential of your resume today!
        </p>
        <h3>
          Chowdappa (Lead Developer, UX/UI Designer) - With expertise in MERN
          full stack development, Chowdappa leads our development team with a
          keen eye for detail and a passion for innovation. He specializes in
          crafting intuitive user interfaces and scalable solutions. Creative
          powerhouse, responsible for translating user needs into visually
          appealing designs. He expertise in user experience design ensures that
          our platform is both intuitive and aesthetically pleasing.
        </h3>
        <br />
        <h3>
          Sharath (Backend Developer, Content Strategist) - Proficient in
          building robust server-side applications using Node.js and Express.js.
          His meticulous attention to detail ensures the reliability and
          security of our platform's infrastructure. Crafting compelling content
          that effectively communicates the value of our platform to our users.
          He expertise in content strategy ensures that our messaging resonates
          with our target audience.
        </h3>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-bio">{member.bio}</p>
              {member.socialLinks && (
                <ul className="social-links">
                  {member.socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} target="_blank" rel="noreferrer">
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p className="about-us-description">
          Together, we are committed to providing you with the tools and support
          you need to create a standout resume and achieve your career goals.
          <br />
          Thank you for choosing our platform—we're excited to be a part of your
          journey!
        </p>
        <footer className="footer">
          <p className="footer-text">
            © 2024 Resume Builder. All Rights Reserved.
          </p>
          <hr className="hr"></hr>
          <ul className="social-links">
            <li>
              <SocialIcon url="www.google.com" />
            </li>
            <li>
              <SocialIcon url="www.facebook.com" />
            </li>
            <li>
              <SocialIcon url="www.linkedin.com" />
            </li>
            <li>
              <SocialIcon url="www.twitter.com" />
            </li>
            <li>
              <SocialIcon url="www.instagram.com" />
            </li>
            <li>
              <SocialIcon url="www.github.com" />
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default About;
