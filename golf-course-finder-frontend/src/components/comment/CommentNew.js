import React, { Component } from 'react'

export class CommentNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      name: "",
      course_id: this.props.courseId
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default CommentNew
