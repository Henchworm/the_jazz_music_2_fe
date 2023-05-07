import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import { useState, useEffect } from 'react';
import Live from './components/Live/Live';
import Music from './components/Music/Music';
import Blarg from './components/Blarg/Blarg';
import BadUrl from './components/BadUrl/BadUrl';
import { getGigs, getBlargPosts } from './apiCalls';
import './App.css';

function App() {
  const [gigs, setGigs] = useState([]);
  const [nextGig, setNextGig] = useState({});
  const [blargPosts, setBlargPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getGigs()
      .then(data => {
        setGigs(data);
        setNextGig(data[0]);
        setLoading(false);
        setError('');
      })
      .catch(error => {
        setError(`Oops, that's a ${error.message}. Please refresh and try again!`)
        setLoading(false);
      })
    
    getBlargPosts()
      .then(data => console.log('blarg posts: ', data))
  }, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home 
            nextGig={nextGig}
            loading={loading}
            error={error}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/live">
          <Live 
            gigs={gigs} 
            loading={loading}
            error={error}
          />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/blog">
          <Blarg />
        </Route>
        <Route component={BadUrl} />
      </Switch>
    </main>
  );
}

export default App;
