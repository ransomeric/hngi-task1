import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Router>
        <div className='main'>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
 
export default App;
