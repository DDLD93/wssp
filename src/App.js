import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Trip from './Trip'
import Navbar from './Navbar';
import Home from './Home';
import Explore from './Explore';



function App() {
  return (

    <React.Fragment>
      <Router>
        <Navbar/>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trip">
            <Trip />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
    </Router>
    </React.Fragment>
  )

    
};

export default App;