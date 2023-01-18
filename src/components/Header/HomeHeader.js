import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../../constants";

export default class HomeHeader extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#DFEEED",
          padding: SIZES.font,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 135, height: 37.5 }}
          />

          <View style={{ width: 50, height: 50 }}>
            <Image
              source={assets.person}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 50 }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
            />
          </View>
        </View>

        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary,
            marginVertical: SIZES.font,
            marginLeft: SIZES.large,
          }}
        >
          Hello User 👋
        </Text>
      </View>
    );
  }
}
