import { useState, useEffect } from 'react';
import { getDisplayDate, getDisplayDay, getStandardDisplayTime } from '../../../helpers';
import './Gig.css';

function Gig({band, date, details, link, venue}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isWide, setIsWide] = useState(windowWidth >= 790);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    if (windowWidth >= 790) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
        
    return(() => {
        window.removeEventListener('resize', updateWidth);
    })
  }, [windowWidth]);

  let infoBtnText = 'Show Details';
  if (isExpanded) {
    infoBtnText = 'Hide Details';
  }

  const handleInfoClick = () => {
    setIsExpanded(!isExpanded);
  }

  const handleTicketClick = () => {
    const url = link.includes('http') ? link : `https://${link}`;
    window.open(url, '_blank');
  }

  const getResponsiveDate = (date) => {
    const displayDay = getDisplayDay(date);
    const displayDate = getDisplayDate(date).split(',')[0];
    let responsiveDay;
    if (displayDay.toLowerCase().includes('tues') || displayDay.toLowerCase().includes('thurs')) {
      responsiveDay = displayDay.toLowerCase().includes('tues') ? 'Tues' : 'Thurs';
    } else {
      responsiveDay = displayDay.substring(0, 3);
    }
    const responsiveDate = `${responsiveDay} ${displayDate}`;
    return responsiveDate;
  }

  return (
    <>
    {isWide && <article className='wide-gig-card'>
        <div className='wide-info-container'>
          <div className='wide-date-container'>
            <span><b>{getDisplayDate(date)}</b></span>
            <br />
            <span>{getDisplayDay(date)}</span>
          </div>
          <div className='wide-venue-container'>
            <span><b>{band}</b></span>
            <br />
            <span>{`${venue} @ ${getStandardDisplayTime(date)}`}</span>
          </div>
          <div className='wide-button-container'>
            <button onClick={handleInfoClick}>{infoBtnText}</button>
            <button onClick={handleTicketClick}>More Info</button>
          </div>
        </div>
        {isExpanded && <div className='wide-details-container'>
          <p>{details}</p>
        </div>}
      </article>}
      {!isWide && <article className='gig-card'>
        <div className='info-container'>
          <div className='date-venue-container'>
            <p className='responsive-date'>{getResponsiveDate(date)}</p>
            <p className='band'>{band}</p>
            <span>{`${venue}`}</span>
            <br />
            <span>@ {`${getStandardDisplayTime(date)}`}</span>
          </div>
          <div className='button-container'>
            <button onClick={handleTicketClick}>More Info</button>
            <button onClick={handleInfoClick}>{infoBtnText}</button>
          </div>
        </div>
        {isExpanded && <div className='details-container'>
          <p className='details'>{details}</p>
        </div>}
      </article>}
    </>
  )
}

export default Gig;