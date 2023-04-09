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
          <p>The Freshman Philosophy Majors hail from Denver, Colorado, where they perform demented original music from the minds of Chris Hewitt (drums), Tim Sanchez (bass), and Chase Hildebrandt (keys). All graduates from Colorado State University's prestigious percussion department, the trio is known for enchanting raps, driving beats and extreme silliness.</p>
        </div>
      </article>
      <article className="band-card">
        <img src={gamelan} alt="Gamelan performing live." />
        <div className="band-text">
          <h1>Gamelan Tunas Mekar</h1>
          <p>Based in Denver, Colorado, USA, Gamelan Tunas Mekar is a community ensemble under the direction of Balinese composer and Artist-in-Residence I Made Lasmawan.
          Tunas Mekar presents the traditional and new music for Balinese gamelan at music festivals, schools, private events, local venues, specially produced concerts, and by special invitation both internationally and nationally.
          Modeled after typical village groups found throughout Bali, and learning by traditional methods, this community ensemble provides American audiences the rare opportunity to experience one of the world's most beautiful and sophisticated performing arts.</p>
        </div>
      </article>
      <article className="band-card">
        <img src={spaceforce} alt="Space Force performing live." />
        <div className="band-text">
          <h1>Space Force</h1>
          <p>Space Force, from the mind of Denver guitarist extraordinaire Tucker Smidt, is a off-kilter avant-garde funk band performing original music around Denver's dive bars. The 5-piece band features Adam Bell (tenor), Joe Hoffarth (alto), Tucker Smidt (guitar), Mike Rink (bass), and Chris Hewitt (drums). As one critic said of the group, "they [Space Force] will bring the space funk to your ass."</p>
        </div>
      </article>
      <article className="band-card">
        <img src={solo} alt="Chris's drumset." />
        <div className="band-text">
          <h1>Chris Hewitt</h1>
          <p>As a solo performer, Chris Hewitt performs contemporary percussion music, ranging from spectral vibraphone works to meditative triangle solos. His current repertoire includes works by Christopher Deane, Kristen Kuster, Sarah Hennies, Tim Sanchez, Alvin Lucier, John Lane, as well as his original vibraphone compositions and improvisations for solo drumset. Chris can also be found freelancing around Denver as a hired gun for jazz groups, chamber ensembles, and various bands that require phat beats. 
          Chris has performed at the Brown Palace, the Mercury Cafe, Lost Lake, the Lion's Lair, the King Center, the Newman Center, Forest Room 5, and the Savoy Ballroom. 
          His original compositions have been performed by Witches and Science, Space Force, the Matt Smiley trio, Nebula Ensemble, and the Colorado State Jazz Combo I.</p>
        </div>
      </article>
    </section>
    
    /* other potential style: 
    <section className="music-section">
      <article className="band-card">
        <img src={freshies} alt="alt text" />
        <h1>The Freshman Philosophy Majors</h1>
        <p>The Freshman Philosophy Majors hail from Denver, Colorado, where they perform demented original music from the minds of Chris Hewitt (drums), Tim Sanchez (bass), and Chase Hildebrandt (keys). All graduates from Colorado State University's prestigious percussion department, the trio is known for enchanting raps, driving beats and extreme silliness. </p>
      </article>
      <article className="band-card">
        <img src={gamelan} alt="alt text" />
        <h1>Gamelan Tunas Mekar</h1>
        <p>Based in Denver, Colorado, USA, Gamelan Tunas Mekar is a community ensemble under the direction of Balinese composer and Artist-in-Residence I Made Lasmawan.
          Tunas Mekar presents the traditional and new music for Balinese gamelan at music festivals, schools, private events, local venues, specially produced concerts, and by special invitation both internationally and nationally.
          Modeled after typical village groups found throughout Bali, and learning by traditional methods, this community ensemble provides American audiences the rare opportunity to experience one of the world's most beautiful and sophisticated performing arts.</p>
      </article>
      <article className="band-card">
        <img src={spaceforce} alt="alt text" />
        <h1>Space Force</h1>
        <p>Space Force, from the mind of Denver guitarist extraordinaire Tucker Smidt, is a off-kilter avant-garde funk band performing original music around Denver's dive bars. The 5-piece band features Adam Bell (tenor), Joe Hoffarth (alto), Tucker Smidt (guitar), Mike Rink (bass), and Chris Hewitt (drums). As one critic said of the group, "they [Space Force] will bring the space funk to your ass."</p>
      </article>
      <article className="band-card">
        <img src={solo} alt="alt text" />
        <h1>Chris Hewitt</h1>
        <p>As a solo performer, Chris Hewitt performs contemporary percussion music, ranging from spectral vibraphone works to meditative triangle solos. His current repertoire includes works by Christopher Deane, Kristen Kuster, Sarah Hennies, Tim Sanchez, Alvin Lucier, John Lane, as well as his original vibraphone compositions and improvisations for solo drumset. Chris can also be found freelancing around Denver as a hired gun for jazz groups, chamber ensembles, and various bands that require phat beats. 
          Chris has performed at the Brown Palace, the Mercury Cafe, Lost Lake, the Lion's Lair, the King Center, the Newman Center, Forest Room 5, and the Savoy Ballroom. 
          His original compositions have been performed by Witches and Science, Space Force, the Matt Smiley trio, Nebula Ensemble, and the Colorado State Jazz Combo I. </p>
      </article>
    </section> */
  );
}

export default Music;