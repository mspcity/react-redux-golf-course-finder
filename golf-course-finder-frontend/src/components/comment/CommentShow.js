import React from 'react'

const CommentShow = ({ comment }) => {
  return (
    <div className="comment"> 
        { comment.content }<br></br>
        <p className="name"> - { comment.name}</p>
    </div>
  )
}

export default CommentShow;
