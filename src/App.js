import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Css link
import './App.scss';
import './style/rasponsive.css';
import './style/animate.css';
// Router
import {Route, Switch} from 'react-router-dom';
// Pages Components
import Home from "./pages/Home";
import About from "./pages/About";

import Services from "./pages/Services"
import Team from "./pages/Team"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
// ERROR PAGES
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Menu && Child Menu */}
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        {/* Error PAges */}
          <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
