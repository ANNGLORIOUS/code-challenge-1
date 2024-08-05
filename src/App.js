import React from 'react';
import './App.css'
import SearchBar from './Components/SearchBar';
import Account from './Components/Account';

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Bank of Flatiron</h2>
      </div>
      <SearchBar />
      <Account />

  

    </div>
  )
}


export default App;
