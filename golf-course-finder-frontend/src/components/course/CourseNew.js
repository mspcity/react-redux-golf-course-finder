import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCourse } from '../../actions';

export class CourseNew extends Component {

  constructor() {
    super();
    this.state ={
      club_name: "",
      number_of_holes: "",
      course_length: "",
      club_type: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      phone: "",
      website: "",
      image: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state)
    this.props.history.push('/courses')
  }


  render() {
    return (
      <React.Fragment>
        <form className="course-form" onSubmit={this.handleSubmit}>
          <label htmlFor="club_name">Club Name:</label>
          <input type="text" className="form-control" name="club_name" placeholder="Club Name" value={this.state.club_name} onChange={this.handleChange} /><br></br>

          <label htmlFor="number_of_holes">Number of Holes:</label>
          <input type="text" className="form-control" name="number_of_holes" placeholder="Number of Holes" value={this.state.number_of_holes} onChange={this.handleChange} /><br></br>
          
          <label htmlFor="course_length">Total Course Length:</label>
          <input type="text" className="form-control" name="course_length" placeholder="Course Length" value={this.state.course_length} onChange={this.handleChange} /><br></br>

          <label htmlFor="club_type">Club Type:</label>
          <select className="form-control" name="club_type" value={this.state.club_type} onChange={this.handleChange}>
            <option>public</option>
            <option>municipal</option>
            <option>private</option>
          </select><br></br>

          <label htmlFor="address">Address:</label>
          <input type="text" className="form-control" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} /><br></br>
         
          <label htmlFor="city">City:</label>
          <input type="text" className="form-control" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} /><br></br>
         
          <label htmlFor="state">State:</label>
          <input type="text" className="form-control" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} /><br></br>
         
          <label htmlFor="zip_code">Zip Code:</label>
          <input type="text" className="form-control" name="zip_code" placeholder="Zip code" value={this.state.zip_code} onChange={this.handleChange} /><br></br>
         
          <label htmlFor="phone">Phone:</label>
          <input type="text" className="form-control" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} /><br></br>
         
          <label htmlFor="website">Website:</label>
          <input type="text" className="form-control" name="website" placeholder="Website" value={this.state.website} onChange={this.handleChange} /><br></br>
         
          <label htmlFor="image">Image:</label>
          <input type="text" className="form-control" name="image" placeholder="Image" value={this.state.image} onChange={this.handleChange} /><br></br>
         
          <button type="submit">Submit</button>

        </form>
      </React.Fragment>
      
    )
  }
}

export default connect(null, { createCourse })(CourseNew);
