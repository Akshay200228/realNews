import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <>
    <Router>
    <div >
    <Navbar/>
  
      <Routes>
          <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="Business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="Health"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="Science"/>}/>
          <Route exact path="/sports" element={<News key="sport" pageSize={this.pageSize} country="in" category="Sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
      </Routes>
    </div>
    </Router>
    </>
    )
  }
}
