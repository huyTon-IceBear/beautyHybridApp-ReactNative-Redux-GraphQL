import React from 'react';
import { assets } from '../constants';
import { ProfileInfo } from '../components';
import Layout from '../components/Layout';

export default class Profile extends React.PureComponent {
  render() {
    return (
      <Layout
        backgroundImage={assets.register}
        navigation={this.props.navigation}
      >
        <ProfileInfo navigation={this.props.navigation} />
      </Layout>
    );
  }
}
