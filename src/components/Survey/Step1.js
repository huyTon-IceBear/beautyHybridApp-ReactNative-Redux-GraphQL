import React, { useCallback, memo } from 'react';
import _ from 'lodash';
import { Text, Image, Incubator, TouchableOpacity } from 'react-native-ui-lib';
import { View } from 'react-native';
import { assets } from '../../constants';
import { StyleSheet } from 'react-native';

const PersonalInfo = () => {
  const { WheelPicker } = Incubator;

  const ages = _.times(87, (i) => i + 13);

  const getItems = useCallback((values) => {
    return _.map(values, (item) => ({ label: '' + item, value: item }));
  }, []);

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
          <Text> What's your gender?</Text>
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
            <Image source={assets.male} style={{ width: 40, height: 40 }} />
            <Text> Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={assets.female} style={{ width: 40, height: 40 }} />
            <Text> Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={assets.other} style={{ width: 40, height: 40 }} />
            <Text> Other</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image source={assets.leaf} style={{ width: 30, height: 30 }} />
        <Text> What's your age?</Text>
      </View>
      <WheelPicker
        items={getItems(ages)}
        initialValue={22}
        style={{ backgroundColor: 'transparent', marginTop: 10 }}
      />
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

export default memo(PersonalInfo);
