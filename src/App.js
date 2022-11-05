import "./assets/styles/styles.css"

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer"
import Home from "./pages/home"
import Contact from './pages/contact';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Router>
        <div className='main'>
          {/* <Header /> */}
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
 
export default App;
