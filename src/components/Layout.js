import React from "react";
import { assets } from "../constants";
import { CircleButton, FocusedStatusBar } from "../components";
import { StatusBar, SafeAreaView, ImageBackground, View } from "react-native";

export default class Layout extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={{ width: "100%", height: "100%" }}>
          <ImageBackground
            source={this.props.backgroundImage}
            resizeMode="cover"
            imageStyle={{ opacity: 0.5 }}
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            {this.props.children}
          </ImageBackground>
          <CircleButton
            imgUrl={assets.left}
            handlePress={() => this.props.navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
          />
        </View>
      </SafeAreaView>
    );
  }
}
