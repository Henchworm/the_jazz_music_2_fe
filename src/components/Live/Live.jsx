import Gig from './Gig/Gig';
import './Live.css';

function Live({ gigs, loading, error }) {

  const renderSection = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (!loading && gigs.length) {
      const displayGigs = gigs.map(gig => {
        return (
          <Gig
            key={gig.id}
            band={gig.band_name}
            date={gig.date} 
            details={gig.details}
            link={gig.link}
            venue={gig.venue}
          />
        )
      });
      return displayGigs;
    } else if (!loading && !error && !gigs.length) {
      return <h1>No upcoming shows, yet!</h1>
    } else {
      return null;
    }
  }

  return (
    <section className='live-section'>
      <h1>Shows</h1>
      {error && <h1>error</h1>}
      {renderSection()}
    </section>
  );
}

export default Live;