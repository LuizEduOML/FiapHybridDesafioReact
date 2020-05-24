import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class SingleData extends Component {

  constructor(props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        picture: null
      }
  }

  componentDidMount() {
    this.fetchSingleData();
  }

  fetchSingleData = async () => {
    const response = await fetch("https://reqres.in/api/users/" + this.props.id)
    .then(response => response.json())
    .then((responseJson)=> {

      var first_name = responseJson['data']['first_name']
      var last_name = responseJson['data']['last_name']
      var email = responseJson['data']['email']
      var picture = responseJson['data']['avatar']

      this.setState({first_name: first_name,
                     last_name: last_name,
                     email: email,
                     picture: picture})

    })
  }

  render() {
    return (
      <View style={styles.line}> 
        <Image style={styles.picture} source={{ uri: this.state.picture }}/>
        <View style={styles.info}>
          <Text style={styles.name}>{`${this.state.first_name} ${this.state.last_name}`}</Text>
          <Text style={styles.email}>{`${this.state.email}`}</Text>
        </View>
      </View>
    );
  }
}

SingleData.propTypes = {id: PropTypes.string.isRequired};

const styles = StyleSheet.create({
  line: {
    height: 50,
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
    alignSelf: "center"
  },
  info: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  email: {
    fontSize: 14
  }
});
