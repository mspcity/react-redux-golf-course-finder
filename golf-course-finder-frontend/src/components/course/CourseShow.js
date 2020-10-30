import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions'
import { deleteCourse } from '../../actions'
import { fetchComments } from '../../actions';
import { likeCourse } from '../../actions';
import CommentsList from '../comment/CommentsList';
import CommentNew from '../comment/CommentNew';
import LikeButton from '../likes/LikeButton';

export class CourseShow extends Component {

  componentDidMount() {
    this.props.fetchCourse(this.props.match.params.courseId);
    this.props.fetchComments(this.props.match.params.courseId); 
  }
  
  handleClick = () => {
    this.props.likeCourse(this.props.course)
  }

  render() {
    const { course, deleteCourse, comments, history } = this.props;
    let website_address = `${course.website}`
    return (
      <div className="course-show">
        <div className="container-fluid">
          <h3 className="course-header">{course.club_name}</h3>
            <div className="course-body">
              <img src={course.image} className="img-fluid" width="100%" height="70%" alt="pic" />
              <br></br>
              <span className="bold-text"></span>{course.number_of_holes} holes<br></br>
              <span className="bold-text"></span>{course.course_length} yards<br></br>
              <span className="bold-text"></span>{course.club_type}<br></br>
              <span className="bold-text"></span>{course.address}<br></br>
              <span className="bold-text"></span>{course.city}, 
              <span className="bold-text"></span>{course.state},
              <span className="bold-text"></span>{course.zip_code}<br></br>
              <span className="bold-text"></span>{course.phone}<br></br>
              <a href={website_address}>{course.website}</a><br></br>
              <br></br>
            </div>
        </div>
        <Button className="btn btn-sm" onClick={() => deleteCourse(course.id, history)}>Delete</Button>
        <LikeButton course={course} likeCourse={this.handleClick} />
        <br></br>
        <br></br>
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
