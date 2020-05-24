import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Header from './components/header';
import SingleData from './components/single-data';
import DataList from './components/data-list';

function Item({first_name, last_name, email, picture}) {
  return(
    <View style={styles.line}>
      <DataList first_name={first_name} last_name={last_name} email={email} picture={picture}/>
    </View>
  );
}

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchDataList();
  }

  fetchDataList = async () => {
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Header headerText="Single Data"/>
        <SingleData id="11"/>

        <Header headerText="Data List"/>
        <FlatList
        data={this.state.data}
        keyExtractor={ item => item.email }
        renderItem={({ item }) => <Item first_name={item.name.first}
                                        last_name={item.name.last}
                                        email={item.email}
                                        picture={item.picture.thumbnail}
                                  />}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "white"
  },
  line: {
    height: 50,
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
});
