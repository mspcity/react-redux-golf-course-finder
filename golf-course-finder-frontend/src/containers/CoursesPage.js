import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCourses } from '../actions';
import CoursesList from '../components/CoursesList';


export class CoursesPage extends Component {

  componentDidMount() {
    this.props.fetchCourses ()
  }

  render() {
    const { courses, match } = this.props
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={match.url} render={() => (
            <CoursesList courses = {courses} />
          )} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default connect(state => ({ courses: state.courses }), { fetchCourses })(CoursesPage)
