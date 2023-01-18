import _ from "lodash";
import React, { Component } from "react";
import {
  View,
  Button,
  ProgressBar,
  Toast,
  Spacings,
} from "react-native-ui-lib";
import PersonalInfo from "./Step1";
import SkinType from "./Step2";

const flavors = ["Chocolate", "Vanilla"];
const initialFlavor = flavors[0];

export default class Questionaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      completedStepIndex: undefined,
      selectedFlavor: initialFlavor,
      customerName: undefined,
      toastMessage: undefined,
    };
  }

  onActiveIndexChanged = (activeIndex) => {
    this.setState({ activeIndex });
  };

  closeToast = () => {
    setTimeout(() => {
      this.setState({ toastMessage: undefined });
    }, 2000);
  };

  goToPrevStep = () => {
    const { activeIndex: prevActiveIndex } = this.state;
    const activeIndex = prevActiveIndex === 0 ? 0 : prevActiveIndex - 1;

    this.setState({ activeIndex });
  };

  renderPrevButton = () => {
    return (
      <Button
        testID={"uilib.prevButton"}
        size={Button.sizes.large}
        label={"Back"}
        marginT-10
        onPress={this.goToPrevStep}
      />
    );
  };

  goToNextStep = () => {
    const {
      activeIndex: prevActiveIndex,
      completedStepIndex: prevCompletedStepIndex,
    } = this.state;
    const reset = prevActiveIndex === 2;
    if (reset) {
      this.reset();
      return;
    }

    const activeIndex = prevActiveIndex + 1;
    let completedStepIndex = prevCompletedStepIndex;
    if (!prevCompletedStepIndex || prevCompletedStepIndex < prevActiveIndex) {
      completedStepIndex = prevActiveIndex;
    }

    if (
      activeIndex !== prevActiveIndex ||
      completedStepIndex !== prevCompletedStepIndex
    ) {
      this.setState({ activeIndex, completedStepIndex });
    }
  };

  renderNextButton = (disabled) => {
    const { activeIndex } = this.state;
    const label = activeIndex === 2 ? "done & reset" : "next";

    return (
      <Button
        testID={"uilib.nextAndResetButton"}
        size={Button.sizes.large}
        label={label}
        marginT-10
        onPress={this.goToNextStep}
        disabled={disabled}
      />
    );
  };

  renderCurrentStep = () => {
    const { activeIndex } = this.state;

    switch (activeIndex) {
      case 0:
      default:
        return <PersonalInfo />;
      case 1:
        return <SkinType />;
    }
  };

  render() {
    const { toastMessage } = this.state;

    return (
      <View useSafeArea flex marginT-50>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ProgressBar
            progress={30}
            style={{
              marginHorizontal: Spacings.s4,
              backgroundColor: "#FFF1D1",
              width: "50%",
              height: 5,
            }}
            progressColor={"#F3B592"}
          />
        </View>

        <View
          style={{
            marginTop: 50,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          {this.renderCurrentStep()}
        </View>

        {this.renderNextButton()}

        {!_.isNil(toastMessage) && (
          <Toast visible position="bottom" message={toastMessage} />
        )}
      </View>
    );
  }
}
