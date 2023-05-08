import Band from './Band/Band';
import { MUSIC_DATA } from '../../constants';
import './Music.css';

function Music() {

  const renderSection = () => {
    return MUSIC_DATA.map(band => {
      return (
        <Band
          key={band.id}
          name={band.name} 
          desc={band.desc}
          imgSrc={band.imgSrc}
          imgAlt={band.imgAlt}
        />
      )
    })
  }

  return (
    <section className="music-section">
      {renderSection()}
    </section>
  );
}

export default Music;