import React from "react";
import { Root } from "native-base";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../screens/Login/LoginScreen"
import Home from "../screens/Home/HomeScreen";
import SideBar from "./sidebar";
import AppFooter from "./footer";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const TabScreens = createBottomTabNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },
  },
  {
    tabBarComponent: props => <AppFooter {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    TabScreens: { screen: TabScreens },
    Drawer: { screen: Drawer },
    Login: { screen: Login }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;