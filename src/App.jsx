import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { AnimesHome } from './pages/AnimesHome';
import { AnimeDetails } from './pages/AnimeDetails';
import { MangaDetails } from './pages/MangaDetails';
import { MangasHome } from './pages/MangasHome';
import { NotFound } from './components/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/anime">
          <AnimesHome/>
        </Route>
        <Route exact path="/anime/:animeId">
          <AnimeDetails/>
        </Route>
        <Route exact path="/manga">
          <MangasHome/>
        </Route>
        <Route exact path="/manga/:mangaId">
          <MangaDetails/>
        </Route>
        <Route exact path="/manga"></Route>
        <Route exact path="/"> <AnimesHome/> </Route>
        <Route path="/"> <NotFound/> </Route>

      </Switch>
    </Router>
  );
}

export default App;

