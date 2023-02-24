import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Live from './components/Live/Live';
import Music from './components/Music/Music';
import Blarg from './components/Blarg/Blarg';
import BadUrl from './components/BadUrl/BadUrl';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/live">
          <Live />
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
