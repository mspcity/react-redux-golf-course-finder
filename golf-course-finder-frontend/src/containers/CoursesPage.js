import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCourses } from '../actions';


export class CoursesPage extends Component {

  componentDidMount() {
    this.props.fetchCourses ()
  }

  render() {
    
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(state => ({ courses: state.courses }), { fetchCourses })(CoursesPage)
