import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
            <Route exact path='/courses' component={CoursesPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
