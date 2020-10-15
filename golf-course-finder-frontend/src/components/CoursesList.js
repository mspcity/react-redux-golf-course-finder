import React, { Component } from 'react'
import TypeFilter from './TypeFilter';
import CourseCard from '../containers/CourseCard';

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

  handleFilterChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      sorted: false
    })
  }

  courseFilter = () => {
    let filteredList = ""
    if (this.state.typeFilter === 'All') {
      filteredList = this.props.courses
    }else {
      filteredList = this.props.courses.filter(course => this.state.typeFilter === course.club_type);
    }
    return filteredList;
  }

  handleClick = () => {
    this.setState({
      sorted: true
    })
  }

  courseSort = () => {
    let sortedList = ""
    let courses = this.props.courses
    sortedList = courses.slice().sort((a, b) => b.likes - a.likes);
    return sortedList
  }

  render() {
    const isSorted = this.state.sorted
    return (
      <React.Fragment>
        <div className="courses-index">
          <TypeFilter handleChange={this.handleFilterChange} />
          <button className="btn-sm" onClick={this.handleClick}></button>
          <div className="course-card-container">
            { isSorted === false ? this.renderCourses(this.courseFilter()) : this.renderCourses(this.courseSort())}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

export default CoursesList
