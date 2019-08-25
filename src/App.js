import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/index';
import Blogs from './pages/blogs';
import Store from './pages/store';
import Events from './pages/events';
import Login from './pages/login';



export default () => {
  return (
    <Router>
      <div>

        <Route path="/" exact component={Home} />
        <Route path="/events/" component={Events} />
        <Route path="/blogs/" component={Blogs} />
        <Route path="/store/" component={Store} />
        <Route path="/login/" component={Login} />

      </div>
    </Router>
  );
}