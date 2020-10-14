import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

export class CourseCard extends Component {
  render() {
    const { course } = this.props
    return (
      <div className="course-card">
        <div className="photo-box">
          <img src={course.image} width="150" height="125" alt="pic" />
          <br></br>

        <span className="bold-text"></span>{course.club_name}
        <br></br>
        <span className="bold-text"></span>{course.club_type}
        <br></br>

          <ButtonGroup>
            <Link key={this.props.course.id} to={`/courses/${this.props.course.id}`}>
              <Button className="brn btn-sm">
                More Info
              </Button>
              
            </Link>
          </ButtonGroup>

        </div>
        
      </div>
    )
  }
}

export default CourseCard
