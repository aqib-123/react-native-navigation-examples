/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

type Props = {
    nav: Object
};
export default class PushedView extends Component<Props> {
    componentDidMount() {
      const { nav } = this.props;

      nav.onNavigateShouldAllow(() => {
        return true;
      });

      nav.onNavigateRightShouldAllow(() => {
        return true;
      });
    }

    componentWillUnmount() {
      this.props.nav.cleanUp()
    }

    goToPushedView = () => this.props.nav.navigate('PushedView');

    render() {
        return (
            <View style={styles.container}>
                <Text>"I'm pushed!"</Text>
                <Button onPress={this.goToPushedView} title={"Push more"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});
