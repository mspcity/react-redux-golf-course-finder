const setCourses = courses => {
  return {
    type: 'FETCH_COURSES',
    courses
  }
};

export const fetchCourses = () => {
  return dispatch => {
    dispatch({type: 'LOADING_COURSES'})
    return fetch('http://localhost:3001/courses')
    .then(resp => resp.json())
    .then(courses => dispatch(setCourses(courses)))
  }
}

const setCourse = course => {
  return {
    type: 'FETCH_COURSE',
    course
  }
}

export const fetchCourse = (courseId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/courses/${courseId}`)
    .then(resp => resp.json())
    .then(course => dispatch(setCourse([course])))
  }
}