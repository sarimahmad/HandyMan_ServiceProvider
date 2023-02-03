import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import {BLACK, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="Account"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: 'flex-end',
                marginTop: 25,
              }}
              source={require('../../assets/awardIcon.png')}
            />
            <Image
              style={styles.log}
              source={require('../../assets/profile.png')}
            />
            <Text style={[styles.boldBlack, {alignSelf: 'center'}]}>
              Maxlin Huxlin
            </Text>
            <Text style={styles.mediusGrey}>Canada,moscot City</Text>

            <View style={[styles.LoginView, {marginTop: 43}]}>
              <Text style={styles.mediumBlack}>Email</Text>
              <View style={styles.borderLine} />
              <TextInput style={{fontSize: 14}} placeholder={'demo123@gmail.com'} />
            </View>

            <View style={[styles.LoginView]}>
              <Text style={styles.mediumBlack}>Phone Number</Text>
              <View style={styles.borderLine} />
              <TextInput
                style={{fontSize: 14}}
                placeholder={'000 - 0000 - 0000'}
              />
            </View>
            <View style={[styles.LoginView]}>
              <Text style={styles.mediumBlack}>Address</Text>
              <View style={styles.borderLine} />
              <TextInput
                style={{fontSize: 14}}
                placeholder={'House 11, Sector 07, Road - 60, Mosto city'}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('More')}
              style={styles.SignInBtn}>
              <Text style={[styles.semiBoldWhite]}>Edit Profile</Text>
            </TouchableOpacity>
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
  mainView: {
    flex: 1,
    width: SCREEN.width - 48,
    alignSelf: 'center',
  },
  borderLine: {
    borderBottomWidth: 0.35,
    borderColor: GREY.Lightborder,
    width: '100%',
  },
  log: {
    height: 100,
    width: 100,
    borderRadius: 45,
    alignSelf: 'center',
  },
  ItemView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: GREY.Lightborder,
    paddingBottom: 20,
    marginBottom: 15,
  },
  IconSize: {
    width: 14,
    height: 14,
    marginRight: 13.8,
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
    marginTop: 18,
    paddingHorizontal: 15,
    paddingBottom: 16,
    paddingTop: 13,
    borderRadius: 10,
  },
  BorderView: {
    height: 22,
    width: 1,
    backgroundColor: GREY.Lightborder,
    marginRight: 20,
  },
  semiBoldWhite: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 14,
    color: WHITE.btntxtColor,
  },
  blackRegular: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: BLACK.dark,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  mediusGrey: {
    fontFamily: FONT.Popins.medium,
    fontSize: 12,
    color: GREY.extraLight,
    textAlign: 'center',
  },
  ValueTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 14,
    color: GREY.extraLight,
  },
});
