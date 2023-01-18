import React from "react";
import { View, Incubator, Button, TouchableOpacity } from "react-native-ui-lib";
import { Text } from "react-native";
const { TextField } = Incubator;

export default class RegisterForm extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          marginRight: 5,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ marginBottom: 20, fontSize: 30, fontWeight: "bold" }}>
            Register
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={{ fontWeight: "bold" }}> Login</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <TextField
            placeholder={"UserName"}
            floatingPlaceholder
            onChangeText={() => console.log("changed")}
            enableErrors
            validate={["required", (value) => value.length > 6]}
            validationMessage={["Field is required", "Username is too short"]}
          />
          <TextField
            placeholder={"Email"}
            floatingPlaceholder
            onChangeText={() => console.log("changed")}
            enableErrors
            validate={["required", "email"]}
            validationMessage={["Field is required", "Email is invalid"]}
          />
          <TextField
            placeholder={"Password"}
            floatingPlaceholder
            onChangeText={() => console.log("changed")}
            enableErrors
            validate={["required", (value) => value.length > 6]}
            validationMessage={["Field is required", "Password is too short"]}
          />
          <TextField
            placeholder={"Confirm Password"}
            floatingPlaceholder
            onChangeText={() => console.log("changed")}
            enableErrors
            validate={["required", (value) => value.length > 6]}
            validationMessage={["Field is required", "Password is too short"]}
          />
        </View>
        <View
          style={{
            marginTop: 12,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Button
            style={{
              backgroundColor: "#026efd",
            }}
            label={"REGISTER NOW"}
            size={Button.sizes.medium}
          />
        </View>
      </View>
    );
  }
}
