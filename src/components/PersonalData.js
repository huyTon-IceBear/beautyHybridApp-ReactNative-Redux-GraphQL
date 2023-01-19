import React from 'react';
import { View, Image } from 'react-native-ui-lib';
import { assets } from '../constants';
import { Text } from 'react-native';

export default class PersonalData extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={assets.leaf} style={{ width: 30, height: 30 }} />
          <Text> Email: uyenvy@gmail.com</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={assets.leaf} style={{ width: 30, height: 30 }} />
          <Text> Birthday: 11/07/1997</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={assets.leaf} style={{ width: 30, height: 30 }} />
          <Text> Skin type: Whiteheads</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={assets.leaf} style={{ width: 30, height: 30 }} />
          <Text> Concerns: Eczema</Text>
        </View>
      </View>
    );
  }
}
