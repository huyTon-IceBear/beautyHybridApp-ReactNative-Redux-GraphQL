import React from "react";
import { assets } from "../constants";
import { Questionaire } from "../components";
import Layout from "../components/Layout";

export default class Survey extends React.PureComponent {
  render() {
    return (
      <Layout backgroundImage={assets.step} navigation={this.props.navigation}>
        <Questionaire navigation={this.props.navigation} />
      </Layout>
    );
  }
}
