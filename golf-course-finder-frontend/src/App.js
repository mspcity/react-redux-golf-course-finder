import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import CoursesPage from './containers/CoursesPage';
import CourseShow from './containers/CourseShow';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/courses' component={CoursesPage} />
              <Route path='/courses/:courseId' component={CourseShow} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
