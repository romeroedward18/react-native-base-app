import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container, Button, Text } from "native-base";
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TestActions from '../../actions/testActions';

class LoginScreen extends Component {

  componentDidMount() {
    this.props.actions.getTest();
  }

  render() {
    const { test, } = this.props;
    console.log(test.data)

    return (
      <Container style={{ alignSelf: "center", justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" />
        <Button style={{ backgroundColor: "#6FAF98", alignSelf: "center", justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Login</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      test: state.test,
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({ ...TestActions, }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
