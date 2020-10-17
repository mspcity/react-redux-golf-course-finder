import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createComment } from '../../actions';

export class CommentNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      name: "",
      course_id: this.props.courseId
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      content: "",
      name: ""
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p className="bold-text">Add Comment</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="content">Comment:</label>
            <input type="text" className="form-control" name="content" value={this.state.content} onChange={this.handleChange} />
            <br></br>
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit</button>

          </form>
      </div>
    )
  }
}

export default connect(null, { createComment })(CommentNew)
