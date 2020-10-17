import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

export class LikeButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button className="btn btn-sm" onClick={this.props.likeCourse}>
         <span role="img" aria-label="golf-flag">⛳</span> Shot!
         {/* &#9971; Shot! */}
          <Badge>{this.props.course.likes}</Badge>
        </Button>
      </React.Fragment>
    )
  }
}

export default LikeButton
