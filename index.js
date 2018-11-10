import React from "react";
import { View, TouchableOpacity, Animated, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export default class SlidingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: height, open: false };
  }

  open = false;

  componentDidMount() {
    this.setState({
      dim: new Animated.Value(height),
      bottom: new Animated.Value(-height)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.handlePress(nextProps);
  }

  handlePress = nextProps => {
    let margin = this.props.margin ? this.props.margin : 40;
    this.open = !this.open;
    if (this.open) {
      Animated.timing(this.state.dim, {
        toValue: margin * 1.3,
        duration: 250
      }).start();
      Animated.timing(this.state.bottom, {
        toValue: margin * 1.3,
        duration: 250
      }).start();
    } else {
      Animated.timing(this.state.dim, {
        toValue: height,
        duration: 250
      }).start();
      Animated.timing(this.state.bottom, {
        toValue: -height,
        duration: 250
      }).start();
    }
    this.setState({ open: this.open });
  };

  close = () => {
    if (this.props.closeOnTapOutside === false) {
      return;
    } else {
      Animated.timing(this.state.dim, {
        toValue: height,
        duration: 250
      }).start();
      Animated.timing(this.state.bottom, {
        toValue: -height,
        duration: 250
      }).start();
      this.open = false;
      this.setState({ open: false });
    }
  };

  render() {
    let margin = this.props.margin ? this.props.margin : 40;
    let drawer = (
      <Animated.View
        style={{
          padding: 5,
          borderRadius: 9,
          position: "absolute",
          right: margin,
          top: this.state.dim,
          bottom: this.props.modern ? this.state.dim : this.state.bottom,
          left: margin,
          backgroundColor: "white"
        }}
      >
        {this.props.layout}
      </Animated.View>
    );

    return (
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          left: 0
        }}
      >
        <TouchableOpacity
          onPress={() => this.close()}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            left: this.state.open ? 0 : width,
            backgroundColor: "#62585858"
          }}
        />
        {drawer}
      </View>
    );
  }
}
