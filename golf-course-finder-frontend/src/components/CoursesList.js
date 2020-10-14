import React, { Component } from 'react'
import TypeFilter from './TypeFilter';

export class CoursesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeFilter: 'All',
      sorted: false
    }
  }

  renderCourses = (courses) => {
    return courses.map(course => <CourseCard key={course.id} course={course} />)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default CoursesList
