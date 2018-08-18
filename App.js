import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Location from "./components/Location";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }
  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => console.log(err)
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Location OnGetLocation={this.getUserLocation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
