// api constants
export const BASE_URL = 'https://blooming-bastion-03428.herokuapp.com/api/v1/';
export const GIGS_PARAM = 'gigs';
export const BLARG_PARAM = 'blargs';

// page constants
// header
export const HEADER_BIO_TEXT = '...a sentence about Chris';

// about
export const ABOUT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

// music
const FRESHIE_DESC = `The Freshman Philosophy Majors hail from Denver, Colorado, where they perform demented original music from the minds of Chris Hewitt (drums), Tim Sanchez (bass), and Chase Hildebrandt (keys). All graduates from Colorado State University's prestigious percussion department, the trio is known for enchanting raps, driving beats and extreme silliness.`;
const GAMELAN_DESC = `Based in Denver, Colorado, USA, Gamelan Tunas Mekar is a community ensemble under the direction of Balinese composer and Artist-in-Residence I Made Lasmawan. Tunas Mekar presents the traditional and new music for Balinese gamelan at music festivals, schools, private events, local venues, specially produced concerts, and by special invitation both internationally and nationally. Modeled after typical village groups found throughout Bali, and learning by traditional methods, this community ensemble provides American audiences the rare opportunity to experience one of the world's most beautiful and sophisticated performing arts.`;
const SPACEFORCE_DESC = `Space Force, from the mind of Denver guitarist extraordinaire Tucker Smidt, is a off-kilter avant-garde funk band performing original music around Denver's dive bars. The 5-piece band features Adam Bell (tenor), Joe Hoffarth (alto), Tucker Smidt (guitar), Mike Rink (bass), and Chris Hewitt (drums). As one critic said of the group, "they [Space Force] will bring the space funk to your ass."`;
const CHRIS_DESC = `As a solo performer, Chris Hewitt performs contemporary percussion music, ranging from spectral vibraphone works to meditative triangle solos. His current repertoire includes works by Christopher Deane, Kristen Kuster, Sarah Hennies, Tim Sanchez, Alvin Lucier, John Lane, as well as his original vibraphone compositions and improvisations for solo drumset. Chris can also be found freelancing around Denver as a hired gun for jazz groups, chamber ensembles, and various bands that require phat beats. Chris has performed at the Brown Palace, the Mercury Cafe, Lost Lake, the Lion's Lair, the King Center, the Newman Center, Forest Room 5, and the Savoy Ballroom. His original compositions have been performed by Witches and Science, Space Force, the Matt Smiley trio, Nebula Ensemble, and the Colorado State Jazz Combo I.`;

const freshies = require('./assets/bands/freshies.png');
const gamelan = require('./assets/bands/gamelan.png');
const spaceforce = require('./assets/bands/spaceforce.png');
const solo = require('./assets/bands/solo.png');

export const MUSIC_DATA = [
  {
    id: 1,
    name: 'The Freshman Philosophy Majors',
    desc: FRESHIE_DESC,
    imgSrc: freshies,
    imgAlt: 'The Freshies playing live.'
  },
  {
    id: 2,
    name: 'Gamelan Tunas Mekar',
    desc: GAMELAN_DESC,
    imgSrc: gamelan,
    imgAlt: 'Gamelan performing live.'
  },
  {
    id: 3,
    name: 'Space Force',
    desc: SPACEFORCE_DESC,
    imgSrc: spaceforce,
    imgAlt: 'Space Force performing live.'
  },
  {
    id: 4,
    name: 'Chris Hewitt',
    desc: CHRIS_DESC,
    imgSrc: solo,
    imgAlt: `Chris's drumset.`
  }
]