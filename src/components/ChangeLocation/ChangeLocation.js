import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ChangeLocation.css';
import LocationIcon from './../icons/LocationIcon';

class ChangeLocation extends Component {
  render() {
    return (
    	<div className={styles.container}>
    		<LocationIcon />
    		<button className={styles.button} onClick={this.props.clickHandler}>Change location</button>
    	</div>
    )
  }
}

ChangeLocation.propTypes = {
	clickHandler: PropTypes.func
};

export default ChangeLocation;