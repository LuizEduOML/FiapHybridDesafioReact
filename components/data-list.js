import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Modal, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { MaterialIcons } from '@expo/vector-icons';

export default class DataList extends Component {

  state = {
    modalVisible: false,
  }

  toggleModal(visibility){
    this.setState({modalVisible: visibility});
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View>
      <Modal visible={this.state.modalVisible} animationType='slide'>
        <MaterialIcons
          name='close'
          size={24}
          style={styles.modalToggle}
          onPress={ ()=>{ this.toggleModal(!this.state.modalVisible) } }
        />
        <View styles={styles.line}>
          <Image style={styles.picture} source={{uri: this.props.picture}}/>
          <View styles={styles.info}>
            <Text style={styles.email}>{`${this.props.email}`}</Text>
          </View>
        </View>
      </Modal>

      <TouchableHighlight onPress={ ()=>{ this.toggleModal(!this.state.modalVisible) } }>
        <Text style={styles.name}>{`${this.props.first_name} ${this.props.last_name}`}</Text>
      </TouchableHighlight>
    </View>
    );
  }
}

DataList.propTypes = {first_name: PropTypes.string.isRequired,
                      last_name: PropTypes.string.isRequired,
                      email: PropTypes.string.isRequired,
                      picture: PropTypes.string.isRequired};

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
    justifyContent: "center",
    alignItems: 'center'
  },
  email: {
    fontSize: 16,
    alignSelf: 'center'
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
