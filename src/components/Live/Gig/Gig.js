import { useState } from 'react';
import { getDisplayDate, getDisplayDay, getStandardDisplayTime } from '../../../helpers';
import './Gig.css';

function Gig({band, date, details, link, venue}) {
  const [isExpanded, setIsExpanded] = useState(false);

  let infoBtnText = 'More Info';
  if (isExpanded) {
    infoBtnText = 'Hide Info';
  }

  const handleInfoClick = () => {
    setIsExpanded(!isExpanded);
  }

  const handleTicketClick = () => {
    const url = link.includes('http') ? link : `https://${link}`;
    window.open(url, '_blank');
  }

  return (
    <article className='gig-card'>
        <div className='info-container'>
          <div className='date-container'>
            <span><b>{getDisplayDate(date)}</b></span>
            <br />
            <span>{getDisplayDay(date)}</span>
          </div>
          <div className='venue-container'>
            <span><b>{band}</b></span>
            <br />
            <span>{`${venue} @ ${getStandardDisplayTime(date)}`}</span>
          </div>
          <div className='button-container'>
            <button onClick={handleInfoClick}>{infoBtnText}</button>
            <button onClick={handleTicketClick}>Tickets</button>
          </div>
        </div>
        {isExpanded && <div className='more-info'>
          <p>{details}</p>
        </div>}
      </article>
  )
}

export default Gig;