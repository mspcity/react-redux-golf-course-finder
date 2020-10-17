import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions'
import { deleteCourse } from '../../actions'
import { fetchComments } from '../../actions';
import CommentsList from '../comment/CommentsList';
import CommentNew from '../comment/CommentNew';

export class CourseShow extends Component {

  componentDidMount() {
    this.props.fetchCourse(this.props.match.params.courseId);
    this.props.fetchComments(this.props.match.params.courseId);
    
  }
  render() {
    const { course, deleteCourse, comments, history } = this.props;
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

        <Button className="btn" onClick={() => deleteCourse(course.id, history)}>Delete</Button>

        <div className="bottom-border"></div>
        
        <CommentsList comments={comments} />
        <CommentNew courseId={this.props.match.params.courseId} />
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const course = state.courses.find(course => course.id === parseInt(ownProps.match.params.courseId, 10)) || {}
  return({
    course: course,
    comments: state.comments
  })
}

export default connect(mapStateToProps, { fetchComments, fetchCourse, deleteCourse, likeCourse })(CourseShow)
