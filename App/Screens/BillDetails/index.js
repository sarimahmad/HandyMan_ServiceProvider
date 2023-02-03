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

export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
        //   leftIcon={require('../../assets/back_white.png')}
        //   leftPress={() => alert('ok')}
          BoldTxt={false}
          headerText="Service Ended"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        //   rightPress={true}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={[styles.detailView, {marginTop: 70}]}>
              <Text style={styles.semiboldGrey}>You Earned</Text>
              <Text style={styles.semiBoldOrange}>PKR 280.00</Text>
            </View>
            <View style={[styles.detailView]}>
              <Text style={styles.semiboldGrey}>Company's (20%)</Text>
              <Text
                style={[
                  styles.semiboldGrey,
                  {fontFamily: FONT.Popins.semi_bold},
                ]}>
                PKR 280.00
              </Text>
            </View>
            <View style={[styles.detailView]}>
              <Text style={styles.semiboldGrey}>Credit</Text>
              <Text
                style={[
                  styles.semiboldGrey,
                  {fontFamily: FONT.Popins.semi_bold},
                ]}>
                PKR 280.00
              </Text>
            </View>
            <View style={[styles.detailView]}>
              <Text style={styles.semiboldGrey}>Total Time</Text>
              <Text
                style={[
                  styles.semiboldGrey,
                  {fontFamily: FONT.Popins.semi_bold},
                ]}>
                PKR 280.00
              </Text>
            </View>
            <View style={[styles.detailView]}>
              <Text style={styles.semiboldGrey}>Waiting </Text>
              <Text
                style={[
                  styles.semiboldGrey,
                  {fontFamily: FONT.Popins.semi_bold},
                ]}>
                PKR 280.00
              </Text>
            </View>

            <View style={styles.serviceTotal}>
              <Text style={styles.whiteSemiBold}>Service Total</Text>
              <Text style={styles.whiteSemiBold}>PKR 350.00</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Rating')}
                style={{
                  width: '100%',
                  marginBottom: 20,
                  backgroundColor: ORANGE.dark,
                  borderRadius: 10,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.whiteSemiBold}>Complete Work</Text>
              </TouchableOpacity>
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
  mainView: {
    flex: 1,
    width: SCREEN.width - 95,
    alignSelf: 'center',
  },
  detailView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: GREY.placeHolderColor,
    paddingBottom: 22.5,
    marginTop: 16,
  },
  serviceTotal: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: GREEN.regular,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginTop: 29,
    borderRadius: 15,
  },
  semiBoldOrange: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 15,
    color: ORANGE.dark,
  },
  semiboldGrey: {
    fontFamily: FONT.Popins.regular,
    fontSize: 15,
    color: GREY.regular,
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
