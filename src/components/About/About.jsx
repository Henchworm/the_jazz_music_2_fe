import { ABOUT_TEXT } from '../../constants';
import './About.css';

const chrisabout = require('../../assets/pages/chrisabout.png');

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={chrisabout} alt="Chris smiling while playing the gamelan" />
        <div className="about-text">
          <p>{ABOUT_TEXT}</p>
        </div>
      </div>
    </section>
  );
}

export default About;