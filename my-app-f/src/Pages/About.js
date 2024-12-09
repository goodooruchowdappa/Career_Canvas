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
      name: "Sharath",
      image: sharth, // Replace with your friend's image path
      bio: `Dynamic MERN Full Stack Developer dedicated to sculpting user-centric web applications. Adept in MongoDB, Express.js, React.js, and Node.js. Seasoned in crafting interactive projects such as resume builders. Driven by a fervor for delivering polished user experiences and pioneering advancements in web development.`,
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
        <h1 className="about-us-title">Our Team</h1>
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
          1. **User-Friendly Interface:** Our platform boasts a sleek and
          intuitive interface designed to guide you through the resume-building
          process seamlessly. Say goodbye to complicated layouts and confusing
          menus – with our user-friendly platform, creating a professional
          resume has never been easier. <br />
          <br />
          2. **Customizable Templates:** We understand that every individual is
          unique, and so are their career paths. That's why we offer a wide
          range of customizable templates to suit your style and preferences.
          Whether you prefer a clean and minimalist design or something more
          creative and eye-catching, we've got you covered.
          <br /> <br />
          3. **Dynamic Content Suggestions:** Stuck on what to include in your
          resume? Our platform offers dynamic content suggestions based on your
          industry, experience level, and career objectives. From key skills and
          accomplishments to relevant keywords and phrases, we'll help you craft
          a compelling resume that stands out to employers.
          <br />
          <br />
          4. **Real-Time Feedback:** Worried about making mistakes? Don't fret –
          our platform provides real-time feedback and suggestions to help you
          optimize your resume for success. From spelling and grammar checks to
          formatting tips and best practices, we'll ensure that your resume is
          polished and professional.
          <br />
          <br /> 5. **Mobile Compatibility:** In today's fast-paced world, you
          need a resume that's accessible anytime, anywhere. That's why our
          platform is fully optimized for mobile devices, allowing you to
          create, edit, and update your resume on the go. Whether you're
          commuting to work or waiting in line, you can take control of your
          career with ease. <br />
          <br />
          6. **Expert Support:** Need help or have a question? Our team of
          experienced developers and support staff are here to assist you every
          step of the way. Whether you're facing technical difficulties or need
          advice on crafting the perfect resume, we're just a click away. <br />
          <br />
          7. **Career Resources:** Building a resume is just the first step on
          your career journey. That's why we offer a range of additional
          resources, including interview tips, career advice, and industry
          insights, to help you succeed in today's competitive job market.{" "}
        </p>
        <p className="about-us-description">
          Together, we are committed to providing you with the tools and support
          you need to create a standout resume and achieve your career goals.
        </p>
        <h3>
          Join the thousands of satisfied users who have already unlocked the
          potential of their resumes with our platform. Sign up today and take
          the next step towards your dream career!..................
        </h3>
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
