import React, { memo } from 'react';
import _ from 'lodash';
import { Text, Image, TouchableOpacity } from 'react-native-ui-lib';
import { View } from 'react-native';
import { assets } from '../../constants';
import { StyleSheet } from 'react-native';

const SkinType = () => {
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={assets.leaf} style={{ width: 30, height: 30 }} />
          <Text> What's your skin type?</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text> Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> Dry</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text> Oily</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> Combination</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 80,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
  },
});

export default memo(SkinType);
