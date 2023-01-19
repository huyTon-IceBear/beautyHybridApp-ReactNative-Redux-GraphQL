import React from 'react';
import { View, Button } from 'react-native-ui-lib';
import PersonalData from './PersonalData';
import { ProfileHeader } from './Header';

export default class ProfileInfo extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          marginRight: 5,
        }}
      >
        <ProfileHeader />
        <PersonalData />
        <View
          style={{
            marginTop: 80,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Button
            style={{
              backgroundColor: '#026efd',
            }}
            label={'Change skin profile'}
            size={Button.sizes.medium}
            onPress={() => {
              this.props.navigation.navigate('Survey');
            }}
          />
        </View>
      </View>
    );
  }
}
