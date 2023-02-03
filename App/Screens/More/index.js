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

export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="More"
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
            <ScrollView>
              <View style={styles.shadowView}>
                <TouchableOpacity style={[styles.ItemView, {marginTop: 15}]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/home2.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Home
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('notification')}
                  style={styles.ItemView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/notification.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Notification
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.ItemView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/chat2.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Message
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.ItemView,
                    {borderBottomWidth: 0, paddingBottom: 0, marginBottom: 25},
                  ]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/booking.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Bookings
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>
              </View>

              <View style={[styles.shadowView, {marginTop: 20}]}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Account')}
                  style={[styles.ItemView, {marginTop: 15}]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={[styles.IconSize, {height: 15, width: 12}]}
                      source={require('../../assets/account.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Account
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Setting')}
                  style={styles.ItemView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/settings.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Settings
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ItemView,
                    {borderBottomWidth: 0, paddingBottom: 0, marginBottom: 25},
                  ]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/language.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Languages
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>
              </View>

              <View style={[styles.shadowView, {marginTop: 20}]}>
                <TouchableOpacity style={[styles.ItemView, {marginTop: 15}]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={[styles.IconSize, {height: 15, width: 12}]}
                      source={require('../../assets/help.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Help & FAQ
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('PrivacyPolicy')
                  }
                  style={styles.ItemView}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={[styles.IconSize, {width: 13, height: 15.7}]}
                      source={require('../../assets/privacy.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Privacy Policy
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ItemView,
                    {borderBottomWidth: 0, paddingBottom: 0, marginBottom: 25},
                  ]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/terms.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Terms & Condititions
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>
              </View>

              <View style={[styles.shadowView, {marginTop: 20}]}>
                <TouchableOpacity
                  style={[
                    styles.ItemView,
                    {
                      borderBottomWidth: 0,
                      marginTop: 15,
                      paddingBottom: 0,
                      marginBottom: 25,
                    },
                  ]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.IconSize}
                      source={require('../../assets/logout.png')}
                    />
                    <Image
                      style={{marginRight: 14}}
                      source={require('../../assets/Line.png')}
                    />
                    <Text
                      style={{fontFamily: FONT.Popins.regular, fontSize: 14}}>
                      Sign Out
                    </Text>
                  </View>
                  <Image source={require('../../assets/rightarrow.png')} />
                </TouchableOpacity>
              </View>
            </ScrollView>
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
  log: {
    height: 100,
    width: 100,
    borderRadius: 45,
    alignSelf: 'center',
  },
  shadowView: {
    width: '100%',
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    justifyContent: 'space-between',
    shadowOffset: {
      width: -2,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 29,
    paddingHorizontal: 15,
    paddingTop: 13,
    borderRadius: 10,
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
