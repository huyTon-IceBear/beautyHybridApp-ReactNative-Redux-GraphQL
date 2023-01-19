import React from 'react';
import { View, Image } from 'react-native-ui-lib';
import { assets } from '../../constants';
import { Text } from 'react-native';

export default class ProfileHeader extends React.PureComponent {
  render() {
    return (
      <>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 270, height: 75 }}
          />
          <View style={{ width: 50, height: 50 }}>
            <Image
              source={assets.person}
              resizeMode="cover"
              style={{ width: '100%', height: '100%', borderRadius: 50 }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: 'absolute',
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginBottom: 20, fontSize: 30, fontWeight: 'bold' }}>
            Vy Tran
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 5,
          }}
        >
          <Text>Welcome to the journey for better life</Text>
        </View>
      </>
    );
  }
}
