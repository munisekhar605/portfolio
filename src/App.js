import React from "react";
import "./App.css";

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-header">
        <img
          src="sekhar-img.jpg"
          alt="Profile"
          className="bio-image"
        />
        <h1 className="bio-title">Hi, I'm Munisekhar Udavalapati 👋</h1>
        <p className="bio-subtitle">Full-Stack Developer & Innovator</p>
      </div>

      <div className="bio-description">
        <p className="bio-intro">
          I’m a passionate <strong>Node.js Developer</strong> and{" "}
          <strong>MERN Stack Developer</strong> dedicated to creating modern,
          impactful web applications. I focus on delivering high-performance,
          scalable, and beautiful software solutions.
        </p>

        <h2 className="bio-heading">What I Do 🚀</h2>
        <ul className="bio-list">
          <li>✨ Backend Development: Node.js, Express.js, APIs</li>
          <li>✨ Frontend Development: React.js, HTML, CSS, Bootstrap</li>
          <li>✨ Database: MySQL, MongoDB, Sequelize, Mongoose</li>
          <li>✨ Cloud Services: AWS EC2, RDS, S3</li>
          <li>✨ Secure Authentication: JWT, bcrypt</li>
        </ul>

        <h2 className="bio-heading">Projects 🌟</h2>
        <ul className="bio-list">
          <li>💼 <strong>Expense Tracker:</strong> Tracks expenses with JWT and Razorpay integration.</li>
          <li>💼 <strong>Charity Application:</strong> Facilitates donations with AWS S3 support.</li>
          <li>💼 <strong>Group Chat App:</strong> Multimedia chats and group admin controls.</li>
          <li>💼 <strong>E-commerce App:</strong> Product and order management with React.js.</li>
        </ul>

        <h2 className="bio-heading">Let’s Build Something Amazing Together! 🎉</h2>
        <p className="bio-outro">
          Whether it’s backend architecture or frontend design, I bring creativity
          and problem-solving to every project. When I’m not coding, I enjoy
          playing chess ♟️, reading tech blogs 📚, and refining my documentation
          skills.
        </p>
      </div>

      <div className="bio-social-buttons">
        <a
          href="https://www.linkedin.com/in/munisekhar605/"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-button linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/munisekhar605"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-button github"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1ajD45AAdcrUb6GKtb7YmXGX_O6-5Pw5D/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-button resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Bio;
