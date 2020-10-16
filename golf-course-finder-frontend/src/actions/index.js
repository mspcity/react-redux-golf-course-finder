// Courses index

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

// Course show

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

// Course post
const addCourse = course => {
  return {
    type: 'ADD_COURSE',
    course
  }
};

export const createCourse = (course) => {
  return dispatch => {
    return fetch('http://localhost:3001/courses', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({course: course})
    })
    .then(resp => resp.json())
    .then(course => {
      dispatch(addCourse(course))
    })
    
  }
}

//Course Delete
const removeCourse = course => {
  
}