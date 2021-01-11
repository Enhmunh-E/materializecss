import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import ButtonsAndIcons from './pages/buttonsAndIcons';
import Color from './pages/color';
import Home from './pages/home';
import Typography from './pages/typography';
import { ActionButtons } from './pages/actionButtons';
import { NavBar } from './pages/navbar';
import { Collection } from './pages/collection'
import { Grid } from './pages/grid';
import { Cards } from './pages/cards';
import { Bfooter } from './pages/bc&footer';
import { Forms } from './pages/forms'; 
import { FancyFormInput } from './pages/fancyform&input';
import { ChipsPagination} from './pages/chips&pagination';
import { Carousel } from './pages/carousel';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/typography" exact>
          <Typography />
        </Route>
        <Route path="/color" exact>
          <Color />
        </Route>
        <Route path="/buttonsAndIcons" exact>
          <ButtonsAndIcons />
        </Route>
        <Route path="/actionButtons" exact>
          <ActionButtons />
        </Route>
        <Route path="/navbar" exact>
          <NavBar />
        </Route>
        <Route path="/collection" exact>
          <Collection />
        </Route>
        <Route path="/grid" exact>
          <Grid />
        </Route>
        <Route path="/cards" exact>
          <Cards />
        </Route>
        <Route path="/breadcrumbs&footer" exact>
          <Bfooter />
        </Route>
        <Route path="/forms" exact>
          <Forms />
        </Route>
        <Route path="/fancyform&input" exact>
          <FancyFormInput />
        </Route>
        <Route path="/chips&pagination" exact>
          <ChipsPagination />
        </Route>
        <Route path="/carousel" exact>
          <Carousel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
