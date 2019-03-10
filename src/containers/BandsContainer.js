import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {


   //renderBands = () => this.props.bands.map((band, id) => <div key={id}>{band.name}</div>)
  //{this.renderBands}

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addBand: formData => dispatch({ type: 'ADD_BAND', formData })
    };
};

export default connect(mapStateToProps)(BandsContainer);
