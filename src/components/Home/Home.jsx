import { getDisplayDay, getDisplayDate, getMilitaryDisplayTime, getStandardDisplayTime } from '../../helpers';
import './Home.css';

const chrishome = require('../../assets/pages/chrishome.png');

function Home({ nextGig, loading, error }) {
  const { band_name, date, details, link, venue } = nextGig;

  const handleClick = () => {
    const url = link.includes('http') ? link : `https://${link}`;
    window.open(url, '_blank');
  }

  const renderSection = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (!loading && nextGig.id) {
      return (
        <>
          <h1>Next Show: {band_name}</h1>
          <p>{details}</p>
          <span><b>Venue: </b>{venue}</span>
          <span><b>Date: </b>{`${getDisplayDay(date)} - ${getDisplayDate(date)}`}</span>
          <span><b>Time: </b>{getStandardDisplayTime(date)}</span>
          <button onClick={handleClick}>Get Tickets!</button>
      </>
      );
    } else if (!loading && !error && !nextGig.id) {
      return <h1>No upcoming shows, yet!</h1>
    } else {
      return null;
    }
  }

  return (
    <section className="home-section">
      <div className="home-container">
        <img src={chrishome} alt="Chris playing the drums" />
        <div className="home-highlight-container">
          {error && <h1>{error}</h1>}
          {renderSection()}
        </div>
      </div>
    </section>
  );
}

export default Home;