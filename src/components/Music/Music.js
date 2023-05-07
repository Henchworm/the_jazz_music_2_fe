import { FRESHIE_DESC, GAMELAN_DESC, SPACEFORCE_DESC, CHRIS_DESC } from '../../constants';
import './Music.css';

const freshies = require('../../assets/freshies.png');
const gamelan = require('../../assets/gamelan.png');
const solo = require('../../assets/solo.png');
const spaceforce = require('../../assets/spaceforce.png');

function Music() {

  return (
    <section className="music-section">
      <article className="band-card">
        <img src={freshies} alt="The Freshies playing live." />
        <div className="band-text">
          <h1>The Freshman Philosophy Majors</h1>
          <p>{FRESHIE_DESC}</p>
        </div>
      </article>
      <article className="band-card">
        <img src={gamelan} alt="Gamelan performing live." />
        <div className="band-text">
          <h1>Gamelan Tunas Mekar</h1>
          <p>{GAMELAN_DESC}</p>
        </div>
      </article>
      <article className="band-card">
        <img src={spaceforce} alt="Space Force performing live." />
        <div className="band-text">
          <h1>Space Force</h1>
          <p>{SPACEFORCE_DESC}</p>
        </div>
      </article>
      <article className="band-card">
        <img src={solo} alt="Chris's drumset." />
        <div className="band-text">
          <h1>Chris Hewitt</h1>
          <p>{CHRIS_DESC}</p>
        </div>
      </article>
    </section>
  );
}

export default Music;