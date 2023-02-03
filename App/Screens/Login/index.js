/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView
} from 'react-native';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import {BLACK, GREY, ORANGE, WHITE} from '../../helper/Color';
import {SCOPABLE_TYPES} from '@babel/types';
import {FONT, SCREEN} from '../../helper/Constant';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          headerText="Logins"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <Image
              style={styles.log}
              source={require('../../assets/logo.png')}
            />
            <Text style={styles.boldBlack}>Welcome Back</Text>
            <View style={styles.LoginView}>
              <Text style={styles.mediumBlack}>Enter your mobile number</Text>
              <View style={styles.borderLine} />
              <TextInput
                style={{fontSize: 14}}
                placeholder={'+92 3212674747'}
              />
            </View>
            <View
              style={{
                width: '100%',
                marginTop: SCREEN.height * 0.12,
                alignItems: 'center',
              }}>
              <TouchableOpacity 
              onPress={()=> this.props.navigation.navigate("OTP_verification")}
              style={styles.SignInBtn}>
                <Text style={[styles.semiBoldWhite]}>Sign In</Text>
              </TouchableOpacity>
              <Text onPress={()=> this.props.navigation.navigate("SignUp")} style={[styles.OrangeRegualr, {marginTop: 20}]}>
                You don't have an account?
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btntxtColor,
  },
  log: {
    height: 94,
    width: 99,
    marginTop: 36,
  },
  mainView: {
    flex: 1,
    width: SCREEN.width - 49,
    alignSelf: 'center',
    alignItems: 'center',
  },
  LoginView: {
    width: '100%',
    height: 91,
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    justifyContent: 'space-between',
    shadowOffset: {
      width: -2,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: SCREEN.height * 0.07,
    paddingHorizontal: 15,
    paddingBottom: 16,
    paddingTop: 13,
    borderRadius: 10,
  },
  borderLine: {
    borderBottomWidth: 0.35,
    borderColor: GREY.Lightborder,
    width: '100%',
  },
  boldBlack: {
    fontFamily: FONT.Popins.bold,
    fontSize: 21,
    color: BLACK.dark,
    marginTop: 19,
  },
  mediumBlack: {
    fontFamily: FONT.Popins.medium,
    fontSize: 14,
    color: BLACK.dark,
  },
  SignInBtn: {
    width: '90%',
    height: 42,
    backgroundColor: ORANGE.dark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: ORANGE.dark,
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10,
  },
  semiBoldWhite: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 14,
    color: WHITE.btntxtColor,
  },
  OrangeRegualr: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: ORANGE.dark,
  },
});

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
    role: state.user.role,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, access_token) =>
      dispatch(userActions.setUser({user, access_token})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
