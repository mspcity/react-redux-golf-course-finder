import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCourses } from '../actions';


export class CoursesPage extends Component {

  componentDidMount() {
    this.props.fetchCourses ()
  }

  render() {
    const { courses, match } = this.props
    return (
      <React.Fragment>
        <Switch>
          
        </Switch>
      </React.Fragment>
    )
  }
}

export default connect(state => ({ courses: state.courses }), { fetchCourses })(CoursesPage)
