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