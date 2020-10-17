import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const home = () => {
  return (
    <div className='home'>
      <div className='home-inner'>
        <h2>Find your favorite Golf Course</h2>
        {/* <span className="welcome-text">Find your local golf club</span> */}
        <Link to='/courses'>
          <Button>
            Get Started
          </Button>
        </Link>
      </div>
      
    </div>
  )
}

export default home
