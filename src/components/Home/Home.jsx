import './Home.css';

const chrishome = require('../../assets/chrishome.png');

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <img src={chrishome} alt="Chris playing the drums" />
        <div className="home-highlight-container">
            <h1>Upcoming Gig/Highlight Area</h1>
        </div>
      </div>
    </section>
  );
}

export default Home;