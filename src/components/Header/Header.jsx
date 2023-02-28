import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const hamburger = require('../../assets/hamburger.png');
const hamx = require('../../assets/hamx.png');
const bandcamp = require('../../assets/bandcamp.png')
const github = require('../../assets/github.png');
const insta = require('../../assets/instagram.png');
const youtube = require('../../assets/youtube.png');

function Header() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const hamburgRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target) || hamburgRef.current.contains(event.target)) {
        return;
      }
      setExpanded(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref, setExpanded])

  return (
    <nav className="main-navigation">
      <div className="chris-container">
        <h1 className="chris-name">Chris Hewitt</h1>
        <p className="chris-bio">...a sentence about Chris</p>
      </div>
      {expanded && <div className="dropdown-menu" ref={ref}>
        <span><NavLink exact to='/' className={location.pathname === '/' ? 'homeactive home' : 'inactive home'}>Home</NavLink></span>
        <span><NavLink exact to='/about' className={location.pathname === '/about' ? 'aboutactive about' : 'inactive about'}>About</NavLink></span>
        <span><NavLink exact to='/live' className={location.pathname === '/live' ? 'liveactive live' : 'inactive live'}>Live</NavLink></span>
        <span><NavLink exact to='/music' className={location.pathname === '/music' ? 'musicactive music' : 'inactive music'}>Music</NavLink></span>
        <span><NavLink exact to='/blog' className={location.pathname === '/blog' ? 'blargactive blarg' : 'inactive blarg'}>Blärg</NavLink></span>
      </div>}
      <div className="links-container">
        <div className="links">
          <NavLink exact to='/' className={location.pathname === '/' ? 'homeactive home' : 'inactive home'}>Home</NavLink>
          <NavLink exact to='/about' className={location.pathname === '/about' ? 'aboutactive about' : 'inactive about'}>About</NavLink>
          <NavLink exact to='/live' className={location.pathname === '/live' ? 'liveactive live' : 'inactive live'}>Live</NavLink>
          <NavLink exact to='/music' className={location.pathname === '/music' ? 'musicactive music' : 'inactive music'}>Music</NavLink>
          <NavLink exact to='/blog' className={location.pathname === '/blog' ? 'blargactive blarg' : 'inactive blarg'}>Blärg</NavLink>
        </div>
        <img onClick={() => setExpanded(!expanded)} className="hamburger" src={expanded ? hamx : hamburger} alt="hamburger menu icon" ref={hamburgRef} />
        <div className="icons">
          <a href="https://chrishewitt.bandcamp.com/" target='_blank'  rel="noreferrer"><img src={bandcamp} alt="bandcamp icon outlined in white"/></a>
          <a href="https://www.instagram.com/golden_bullfrog/" target='_blank'  rel="noreferrer"><img src={insta} alt="instagram icon outlined in white"/></a>
          <a href="https://www.youtube.com/@hewi5134" target='_blank'  rel="noreferrer"><img src={youtube} alt="youtube icon outlined in white"/></a>
          <a href="https://github.com/Henchworm" target='_blank'  rel="noreferrer"><img src={github} alt="github icon outlined in white"/></a>
        </div>
      </div>
    </nav>
  );
}

export default Header;