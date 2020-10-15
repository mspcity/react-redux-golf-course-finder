import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import CourseNew from './containers/CourseNew';
import CoursesPage from './containers/CoursesPage';
import CourseShow from './containers/CourseShow';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/courses/new' component={CourseNew} />
              <Route exact path='/courses' component={CoursesPage} />
              <Route path='/courses/:courseId' component={CourseShow} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
