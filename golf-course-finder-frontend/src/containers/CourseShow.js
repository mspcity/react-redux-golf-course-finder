import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCourse } from '../actions';

export class CourseShow extends Component {

  componentDidMount() {
    this.props.fetchCourse(this.props.match.params.courseId);
    
  }
  render() {
    const { course } = this.props;
    return (
      <div className="course-show">
        <div className="container-fluid">
          <h3 className="course-header">{course.club_name}</h3>
            <div className="course-body">
              <img src={course.image} width="100%" height="75%" alt="pic" />
              <br></br>
              <span className="bold-text"></span>{course.number_of_holes} holes

            </div>


        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const course = state.courses.find(course => course.id === parseInt(ownProps.match.params.courseId, 10)) || {}
  return({
    course: course
  })
}

export default connect(mapStateToProps, { fetchCourse })(CourseShow)
