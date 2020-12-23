import React, { Component } from 'react'
import TypeFilter from '../filter/TypeFilter';
import CourseCard from './CourseCard';

export class CoursesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typeFilter: 'All',
      sorted: false
    
    }
  }

  renderCourses = (courses) => {
    // courses = courses.sort((a, b) => (a.club_name > b.club_name) ? 1 : -1)
    return courses.map(course => <CourseCard key={course.id} course={course} />)
  }

  handleFilterChange = (event) => {
    this.setState({

      [event.target.name]: event.target.value,
      sorted: false
    })
  }

  courseFilter = () => {
    let course_type = this.state.typeFilter
    let filteredList = ""
    if (course_type === 'All') {
      filteredList = this.props.courses
    }else {
      filteredList = this.props.courses.filter(course => course_type === course.club_type);
    }
    return filteredList;
  }

  handleSubmit = () => {
    this.setState({
      sorted: true
    })
  }

  courseSort = () => {
    let sortedList = ""
    let courses = this.props.courses
    sortedList = courses.sort((a, b) => b.likes - a.likes)
    return sortedList
  }


  render() {
    const isSorted = this.state.sorted
    return (
      <React.Fragment>
        <div className="courses-index">
          <TypeFilter handleChange={this.handleFilterChange} />
          <button className="btn btn-sm" onClick={this.handleSubmit}>Sort by shot</button>
          <div className="course-card-container">
            { isSorted === false ? this.renderCourses(this.courseFilter()) : this.renderCourses(this.courseSort())}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

export default CoursesList
