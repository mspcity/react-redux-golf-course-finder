import React from 'react'
import { ListGroupItem } from 'react-bootstrap';

const CommentShow = ({ comment }) => {
  return (
    <div>
      <ListGroupItem>
        {comment.content} <br></br> <span className="comments-font"> - {comment.name}</span>
      </ListGroupItem>
    </div>
  )
}

export default CommentShow;
