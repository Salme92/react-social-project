import React, { Fragment } from 'react'; 
import './App.css';
import Header from './../src/header.js';
import TopCardList from './../src/top-card-list.js';

function App() {
  return (
    <Fragment>      
      <Header />
      <TopCardList />
    </Fragment>
  )
}

export default App;
