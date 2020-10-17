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
  return {
    type: 'REMOVE_COURSE',
    course
  }
};

export const deleteCourse = (courseId, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3001/courses/${courseId}`, {
      method: 'DELETE',
    })
    .then(resp => {
      dispatch(removeCourse(courseId))
      routerHistory.replace('/courses')
    })
  }
}

//Comment index

const setComment = comments => {
  return {
    type: 'FETCH_COMMENTS',
    comments
  }
}

export const fetchComments = (courseId) => {
  return dispatch => {
    dispatch({type: 'LOADING_COMMENTS'});
    return fetch(`http://localhost:3001/courses/${courseId}/comments`)
    .then(resp => resp.json())
    .then(comments => dispatch(setComment(comments)))
  }
}

//Comment Post

const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const createComment = (comment) => {
  return dispatch => {
    return fetch(`http://localhost:3001/courses/${comment.course_id}/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ comment: comment })
    })
    .then(resp => resp.json())
    .then(comment => {
      dispatch(addComment(comment))
    })
  }
}

//Likes Course

const addLikes = course => {
  return {
    type: 'LIKE_COURSE',
    course
  }
}

export const likeCourse = course => {
  const updatedCourse = Object.assign({...course}, { likes: course.likes + 1})
  return dispatch => {
    return fetch(`http://localhost:3001/courses/${course.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({course: updatedCourse})
    })
    .then(resp => resp.json())
    .then(course => { 
      dispatch(addLikes(course)) 
    })
  }
}

