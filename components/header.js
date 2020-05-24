import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.header}>{this.props.headerText}</Text>
    );
  }
}

Header.propTypes = {headerText: PropTypes.string.isRequired};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginTop: 25,
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'grey',
    borderColor: 'blue',
    borderWidth: 3,
    color: 'white'
  }
});
