// Add BandInput component
import React, { Component } from 'react'
//import { connect } from 'react-redux';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
  event.preventDefault();
  this.props.addBand(this.state.name)
  this.props.dispatch({ type: 'ADD_BAND', payload: this.state });
}

  render() {
    return(
      <div>
        Band Input
          <form onSubmit={event => this.handleSubmit(event)}>
           <p>
             <label>Brand Name</label>
             <input
            type="text"
            onChange={this.handleChange} value={this.state.text}/>
           </p>
            <input type="submit" />
          </form>
      </div>
    )
  }
}



export default BandInput;
//export default connect(null, mapDispatchToProps)(BandInput);
