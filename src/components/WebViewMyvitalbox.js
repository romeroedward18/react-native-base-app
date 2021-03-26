import React, { Component } from "react";
import { SafeAreaView, Platform, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import * as Location from 'expo-location';

export default class WebViewMyvitalbox extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  };

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  };

  componentDidMount() {
    (async () => {
      await Location.requestPermissionsAsync();
    })();
  }

  UNSAFE_componentWillMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener(
        "hardwareBackPress",
        this.onAndroidBackPress
      );
    }
  }

  UNSAFE_componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          ...Platform.select({
            android: {
              backgroundColor: "#4f97d2",
            },
          }),
        }}
      >
        <WebView
          source={{ uri: "https://myvitalbox.com" }}
          style={{ marginTop: 20 }}
          geolocationEnabled={true}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          ref={(webView) => {
            this.webView.ref = webView;
          }}
          onNavigationStateChange={(navState) => {
            this.webView.canGoBack = navState.canGoBack;
          }}
        />
      </SafeAreaView>
    );
  }
}
