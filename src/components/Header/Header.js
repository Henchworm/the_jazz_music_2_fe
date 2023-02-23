import './Header.css';

const github = require('../../assets/github.png');
const insta = require('../../assets/instagram.png');
const twitter = require('../../assets/twitter.png');
const youtube = require('../../assets/youtube.png');

function Header() {
  return (
    <nav className="main-navigation">
      <div className="chris-container">
        <h1 className="chris-name">Chris Hewitt</h1>
        <p className="chris-bio">...a sentence about Chris</p>
      </div>
      <div className="links-container">
        <div className="links">
          <span className="link home">Home</span>
          <span className="link about">About</span>
          <span className="link live">Live</span>
          <span className="link music">Music</span>
          <span className="link blarg">Blärg</span>
        </div>
        <div className="icons">
          <img src={github} alt="github icon outlined in white"/>
          <img src={insta} alt="instagram icon outlined in white"/>
          <img src={twitter} alt="twitter icon outlined in white"/>
          <img src={youtube} alt="youtube icon outlined in white"/>
        </div>
      </div>
    </nav>
  );
}

export default Header;