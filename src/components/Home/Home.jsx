import { getDisplayDay, getDisplayDate, getMilitaryDisplayTime, getStandardDisplayTime } from '../../helpers';
import './Home.css';

const chrishome = require('../../assets/chrishome.png');

function Home({ nextGig, loading, error }) {
  const { band_name, date, details, link, venue } = nextGig;

  const renderSection = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (!loading && nextGig.id) {
      return (
        <>
          <h1>Next Show: {band_name}</h1>
          <p>{details}</p>
          <b>Venue: </b>{venue}
          <br />
          <b>Date: </b>{`${getDisplayDay(date)} - ${getDisplayDate(date)}`}
          <br />
          <b>Time: </b>{getStandardDisplayTime(date)}
          <br />
          <button>Get Tickets!</button>
      </>
      );
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