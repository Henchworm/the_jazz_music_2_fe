import './About.css';

const chrisabout = require('../../assets/chrisabout.png');

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={chrisabout} alt="Chris smiling while playing the gamelan" />
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </section>
  );
}

export default About;