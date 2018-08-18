import React from "react";
import { Button } from "react-native";
const Location = props => {
  return <Button title="Get Location" onPress={props.onGetLocation} />;
};
export default Location;
