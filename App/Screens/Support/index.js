/* eslint-disable react-native/no-inline-styles */
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
import RNPickerSelect from 'react-native-picker-select';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductType: '',
      frontId: '',
      frontIdobj: '',
      backIdobj: '',
      backId: '',
    };
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="Support"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={[styles.LoginView, {marginTop: 43}]}>
              <Text style={styles.mediumBlack}>Name</Text>
              <View style={styles.borderLine} />
              <TextInput style={{fontSize: 14}} placeholder={'Max lusia'} />
            </View>

            <View style={[styles.LoginView]}>
              <Text style={styles.mediumBlack}>Email Address</Text>
              <View style={styles.borderLine} />
              <TextInput
                style={{fontSize: 14}}
                placeholder={'demo123@gmail.com'}
              />
            </View>

            <View style={styles.LoginView}>
              <Text style={styles.mediumBlack}>Subject</Text>
              <View style={styles.borderLine} />

              <RNPickerSelect
                Icon={() => {
                  return (
                    <Image
                      style={{
                        width: 16,
                        height: 16,
                        marginTop: 5,
                      }}
                      source={require('../../assets/dropDown.png')}
                    />
                  );
                }}
                style={{
                  inputIOS: {
                    backgroundColor: WHITE.btntxtColor,
                    height: 25,
                    borderRadius: 5,
                    width: '100%',
                  },
                  inputAndroid: {
                    backgroundColor: WHITE.btntxtColor,
                    height: 25,
                    borderRadius: 5,
                    width: '100%',
                  },
                }}
                placeholder={{
                  label: 'Subject',
                }}
                selectedValue={this.state.ProductType}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ProductType: itemValue})
                }
                items={[
                  {label: 'Vehicle', value: 1},
                  {label: 'Pakage', value: 2},
                ]}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: SCREEN.height * 0.15,
                backgroundColor: WHITE.btntxtColor,
                shadowColor: GREY.light,
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
              }}>
              <Text style={[styles.mediumBlack, {paddingBottom: 10}]}>
                Message
              </Text>
              <View style={[styles.borderLine]} />
              <TextInput
                maxLength={255}
                multiline={true}
                style={{
                  fontSize: 14,
                  marginTop: 12,
                  paddingBottom: 5,
                  height: 80,
                }}
                placeholder={'Type Message'}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('More')}
              style={styles.SignInBtn}>
              <Text style={[styles.semiBoldWhite]}>Submit Now</Text>
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
    width: SCREEN.width - 49,
    alignSelf: 'center',
  },
  log: {
    height: 100,
    width: 103,
    resizeMode: 'contain',
    marginTop: 36,
    alignSelf: 'center',
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
    alignSelf: 'center',
    marginTop: 35,
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
  OrangeRegualr: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: ORANGE.dark,
  },
  ValueTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 14,
    color: GREY.extraLight,
  },
});
