/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Header from '../../Components/Header';
import {BLACK, BLUE, GREEN, GREY, ORANGE, WHITE} from '../../helper/Color';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {FONT, SCREEN} from '../../helper/Constant';

export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{width: 8, height: 13, marginLeft: 15, marginTop: 10}}
              source={require('../../assets/backArrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.HeaderView}>
            <View>
              <View style={styles.NameView}>
                <Text style={styles.whiteTxt}>N</Text>
              </View>
              <Text
                style={[styles.whiteTxt, {color: BLACK.dark, marginTop: 10}]}>
                Nadeem
              </Text>
              <Text
                style={[
                  styles.whiteTxt,
                  {fontSize: 12, color: GREY.light, marginTop: 10},
                ]}>
                Electrician
              </Text>
            </View>
            <View style={{alignSelf: 'flex-end'}}>
              <Image
                style={{width: 46, height: 46}}
                source={require('../../assets/phoneIcon.png')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 36,
              backgroundColor: 'rgba(112, 112, 112, 0.07)',
            }}>
            <Text
              style={[
                styles.whiteTxt,
                {
                  fontSize: 12,
                  color: GREY.light,
                  textAlign: 'center',
                  marginTop: 20,
                },
              ]}>
              26-July-2022
            </Text>
            <View style={styles.SenderView}>
              <Image
                style={{
                  width: 26,
                  marginRight: 20,
                  height: 26,
                  borderRadius: 15,
                }}
                source={require('../../assets/image2.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 40,
                  backgroundColor: ORANGE.extraLight,
                  height: 73,
                }}>
                <Text style={{alignSelf: 'center', marginLeft: 5}}>
                  Hi, When are you coming?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                    marginBottom: 5,
                    marginRight: 10,
                  }}>
                  <Text>13.33</Text>
                  <Image
                    style={{
                      width: 10,
                      height: 10,
                      marginLeft: 5,
                      marginRight: 5,
                      alignSelf: 'center',
                    }}
                    source={require('../../assets/tick.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 0.3, backgroundColor: 'red'}}></View>
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
  HeaderView: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 16,
    justifyContent: 'space-between',
    paddingRight: 11,
    backgroundColor: WHITE.btntxtColor,
  },
  NameView: {
    width: 46,
    height: 46,
    borderRadius: 30,
    backgroundColor: BLUE.app,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 20,
    color: WHITE.btntxtColor,
  },
  SenderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
