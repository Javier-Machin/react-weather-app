import React, { Component } from 'react';
import '../css/LocationForm.css';

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLocationChange(this.state.location);
    event.target.reset();
  }

  render() {
    return(
      <form className="location-form" onSubmit={(event) => this.handleSubmit(event)}>
        <input 
          placeholder="enter a city" 
          className="location-form__input" 
          name="location" 
          onChange={this.handleChange} 
          type="text" 
        />
        <input className="location-form__btn" type="submit" value="Check weather &rarr;"/>
      </form>
    )
  }
}

export default LocationForm