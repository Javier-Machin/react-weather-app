import React, { Component } from 'react';

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
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>City:</label>
        <input name="location" onChange={this.handleChange} type="text" />
        <input type="submit" />
      </form>
    )
  }
}

export default LocationForm