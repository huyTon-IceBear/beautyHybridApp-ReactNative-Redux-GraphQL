import React from "react";
import { assets } from "../constants";
import { RegisterForm } from "../components";
import Layout from "../components/Layout";

export default class Register extends React.PureComponent {
  render() {
    return (
      <Layout
        backgroundImage={assets.register}
        navigation={this.props.navigation}
      >
        <RegisterForm navigation={this.props.navigation} />
      </Layout>
    );
  }
}
