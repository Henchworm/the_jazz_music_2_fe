import './Header.css';

function Header() {
  return (
    <nav className="main-navigation">
      <div className="chris-container">
        <h1 className="chris-name">Chris Hewitt</h1>
        <p className="chris-bio">...a sentence about Chris</p>
      </div>
      <div className="links-container">
        <p>Home About Live Music Blarg</p>
      </div>
    </nav>
  );
}

export default Header;