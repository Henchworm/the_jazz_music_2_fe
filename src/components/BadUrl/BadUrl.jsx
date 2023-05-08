import './BadUrl.css';

const chrisPet = require('../../assets/pages/badurl.png');

function BadUrl() {
  return (
    <section className='badurl-section'>
      <h1>Oops, that's not a valid URL!</h1>
      <img src={chrisPet} alt="Chris's pet cat looks at you while sitting in a pair of pants."/>
      <p>Try going <a href="/">home</a> or entering another address!</p>
    </section>
  );
}

export default BadUrl;