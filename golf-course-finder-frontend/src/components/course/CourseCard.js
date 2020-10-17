import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { likeCourse } from '../../actions';
import { connect } from 'react-redux';
import LikeButton from '../likes/LikeButton';

export class CourseCard extends Component {

  handleClick = () => {
    this.props.likeCourse(this.props.course)
  }
  render() {
    const { course } = this.props
    return (
      <div className="course-card">
        <div className="photo-box">
          <h4 className="course-header"><Link key={course.id} to={`/courses/${course.id}`}>{course.club_name}</Link></h4>
          <img src={course.image} width="200" height="175" alt="pic" />
          <br></br>

        <span className="bold-text"></span>{course.club_type}
        <br></br>
        <span className="bold-text"></span>{course.city}, {course.state}
        <br></br>

          <ButtonGroup>
            <Link key={this.props.course.id} to={`/courses/${this.props.course.id}`}>
              <Button className="btn btn-sm">
                More Info
              </Button>
            </Link>
            <LikeButton course={this.props.course} likeCourse={this.handleClick} />
          </ButtonGroup>

        </div>
        
      </div>
    )
  }
}

export default connect(null, { likeCourse })(CourseCard)
