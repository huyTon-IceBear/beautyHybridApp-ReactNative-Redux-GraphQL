import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { COLORS } from '../constants';
import { FocusedStatusBar, HomeHeader } from '../components';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar backgroundColor={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <HomeHeader />
          <Button
            style={{
              backgroundColor: '#026efd',
            }}
            label={'Take survey'}
            size={Button.sizes.medium}
            onPress={() => {
              this.props.navigation.navigate('Survey');
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: '100%', backgroundColor: COLORS.beige }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const { friends } = state;
  return { friends };
};

export default connect(mapStateToProps)(HomeScreen);
