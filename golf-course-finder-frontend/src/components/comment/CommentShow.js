import React from 'react'

const CommentShow = ({ comment }) => {
  return (
    <div className="comment"> 
        { comment.content }<br></br>
        <span className="comments-font">
        <p className="name"> - { comment.name}</p></span>
    </div>
  )
}

export default CommentShow;
