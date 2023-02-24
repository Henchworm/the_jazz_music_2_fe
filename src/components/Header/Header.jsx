import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const github = require('../../assets/github.png');
const insta = require('../../assets/instagram.png');
const twitter = require('../../assets/twitter.png');
const youtube = require('../../assets/youtube.png');

function Header2() {
  const location = useLocation();

  return (
    <nav className="main-navigation">
      <div className="chris-container">
        <h1 className="chris-name">Chris Hewitt</h1>
        <p className="chris-bio">...a sentence about Chris</p>
      </div>
      <div className="links-container">
        <div className="links">
          <NavLink exact to='/' className={location.pathname === '/' ? 'homeactive home' : 'inactive home'}>Home</NavLink>
          <NavLink exact to='/about' className={location.pathname === '/about' ? 'aboutactive about' : 'inactive about'}>About</NavLink>
          <NavLink exact to='/live' className={location.pathname === '/live' ? 'liveactive live' : 'inactive live'}>Live</NavLink>
          <NavLink exact to='/music' className={location.pathname === '/music' ? 'musicactive music' : 'inactive music'}>Music</NavLink>
          <NavLink exact to='/blog' className={location.pathname === '/blog' ? 'blargactive blarg' : 'inactive blarg'}>Blärg</NavLink>
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

export default Header2;