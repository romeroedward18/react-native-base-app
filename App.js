import React, { Component } from "react";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NavigationScreens from "./src/navigation/NavigationScreens";
import WebViewMyvitalbox from "./src/components/WebViewMyvitalbox";
// Redux
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./src/store/configureStore";

const store = configureStore();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {<NavigationScreens />}
          {/*<WebViewMyvitalbox />*/}
        </ConnectedRouter>
      </Provider>
    );
  }
}
