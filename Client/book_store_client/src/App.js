import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook.js';
import ShowBookList from './components/ShowBookList.js';
import ShowBookDetails from './components/ShowBookDetails.js';
import UpdateBookInfo from './components/UpdateBookInfo.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path= '/' Component={ShowBookList}/>
          <Route path= '/create-book' Component={CreateBook}/>
          <Route path= '/edit-book/:id' Component={UpdateBookInfo}/>
          <Route path= '/show-book/:id' Component={ShowBookDetails}/>
        </div>
      </Router>
    );
  }
}

export default App;