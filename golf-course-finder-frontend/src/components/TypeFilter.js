import React from 'react'

const TypeFilter = (props) => {
  return (
    <div className='filter'>
      <span className='filter-label'>Golf Courses by type: </span>

      <span className="filter-label"><label htmlFor='all'>All:</label>
      <input type="radio" name="typeFilter" id='all' value='All' onChange={props.handleChange} /></span>
      
      <span className="filter-label"><label htmlFor='public'>Public:</label>
      <input type="radio" name="typeFilter" id='public' value='Public' onChange={props.handleChange} /></span>
      
      <span className="filter-label"><label htmlFor='municipal'>Municipal:</label>
      <input type="radio" name="typeFilter" id='municipal' value='Municipal' onChange={props.handleChange} /></span>
      
      <span className="filter-label"><label htmlFor='private'>Private:</label>
      <input type="radio" name="typeFilter" id='private' value='Private' onChange={props.handleChange} /></span>
      
    
    </div>
  )
}

export default TypeFilter
