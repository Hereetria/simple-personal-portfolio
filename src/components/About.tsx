import React from "react";

const About: React.FC = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Atay <span className="text-primary">Aksakal</span>
        </h1>
        <div className="subheading mb-5">
          Guzelbahce / Izmir · +90 536 051 64 72 ·{" "}
          <a href="https://mail.google.com/mail/?view=cm&to=atayaksakal@outlook.com">
            atayaksakal@outlook.com
          </a>
        </div>
        <p className="lead mb-3">
          I’m Atay Aksakal, a passionate and detail-oriented software developer with
          a multicultural background. Born and raised in Switzerland, I completed my
          secondary education in Balıkesir, Turkey, and earned my degree in Computer
          Programming from İzmir University of Economics.
        </p>

        <p className="lead mb-3">
          I’ve built practical projects such as a vehicle gallery website and a
          full-featured automation system, gaining hands-on experience with
          real-world software challenges. I take pride in creating clean,
          user-centered digital solutions using modern technologies.
        </p>

        <p className="lead mb-4">
          Fluent in German, Swiss German, Turkish, and English, I thrive in
          international environments where effective communication and technical
          skill go hand in hand. I’m currently open to opportunities where I can
          grow, contribute meaningfully, and expand my expertise in software
          development.
        </p>

        <div className="social-icons">
          <a className="social-icon" href="#!">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-github"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social-icon" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
