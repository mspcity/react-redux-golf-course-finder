export default (state=[], action) => {
  switch(action.type) {
    case 'LOADING_COURSES':
      return state
    case 'FETCH_COURSES':
      return action.courses
    case 'FETCH_COURSE':
      return action.course
    case 'ADD_COURSE':
      return state.concat(action.course);
    case 'REMOVE_COURSE':
      return state.filter(course => course.id !== action.id)
    case 'LIKE_COURSE': 
      return state.map((course) => {
        if (course.id === action.course.id) {
          return action.course
        }else {
          return course
        }
      })
    default:
      return state;
  }
}

