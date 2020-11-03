import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCourses } from '../../actions';
import CoursesList from './CoursesList';
// import CourseShow from './CourseShow';


export class CoursesPage extends Component {

  componentDidMount() {
    console.log('a')
    this.props.fetchCourses ()
    console.log('b')
  }

  render() {
    const { courses, match } = this.props
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={match.url} render={() => (
            <CoursesList courses = {courses} />
          )} />
          {/* <Route path={`${match.url}/:courseId`} component={CourseShow} /> */}
        </Switch>
      </React.Fragment>
    )
  }
}


export default connect(state => ({ courses: state.courses }), { fetchCourses })(CoursesPage)
