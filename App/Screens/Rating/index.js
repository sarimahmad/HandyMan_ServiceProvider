/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
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
  Modal,
} from 'react-native';

import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import {BLACK, GREEN, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
import MapView, {Marker} from 'react-native-maps';
export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          BoldTxt={false}
          headerText="Arrived"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <View style={{flex: 1}}>
          <MapView
            style={{width: '100%', height: '65%'}}
            initialRegion={{
              latitude: 31.4883884,
              longitude: 74.3434766,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>

          <View style={styles.wrapperView}>
            <Text style={styles.semiBoldBlack}>How was your customer?</Text>
            <Text style={[styles.semiBoldBlack, {marginTop: 26, fontSize: 26}]}>
              Mounas
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                width: '55%',
                justifyContent: 'space-between',
                marginTop: 25,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/star.png')}
              />
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/star.png')}
              />
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/star.png')}
              />
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/star.png')}
              />
              <Image
                style={{height: 30, width: 30}}
                source={require('../../assets/star.png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Support')}
              style={{
                width: '80%',
                marginBottom: 20,
                backgroundColor: ORANGE.dark,
                borderRadius: 10,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 30,
              }}>
              <Text style={styles.whiteSemiBold}>Complete Work</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width: SCREEN.width - 62,
    alignSelf: 'center',
  },
  paymentView: {
    width: '100%',
    height: SCREEN.height * 0.42,
    backgroundColor: ORANGE.extraLight,
    borderRadius: 10,
    marginTop: 15,
  },
  semiBoldBlack: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 17,
    color: GREY.dark,
    textAlign: 'center',
    marginTop: 23,
  },
  semiboldGrey: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 15,
    color: GREY.regular,
    marginTop: 43,
    textAlign: 'center',
  },
  blackRegular: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: GREY.dark,
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
  whiteSemiBold: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 18,
    color: WHITE.btntxtColor,
  },
  btn: {
    width: '45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ORANGE.dark,
    borderRadius: 10,
  },
});
