import React from "react";
import { assets } from "../constants";
import {LoginForm } from "../components";
import Layout from "../components/Layout";

export default class Login extends React.PureComponent {
  render() {
    return (
      <Layout backgroundImage={assets.login} navigation={this.props.navigation}>
        <LoginForm navigation={this.props.navigation} />
      </Layout>
    );
  }
}
