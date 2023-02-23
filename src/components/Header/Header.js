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
        <p>Home About Live Music Blarg</p>
        <div className="icons">
          <img src={github} />
          <img src={insta} />
          <img src={twitter} />
          <img src={youtube} />
        </div>
      </div>
    </nav>
  );
}

export default Header;