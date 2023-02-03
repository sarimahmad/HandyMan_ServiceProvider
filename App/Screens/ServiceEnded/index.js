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
  Modal,
} from 'react-native';

import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import {BLACK, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

class index extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          BoldTxt={false}
          headerText="Service Ended"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.paymentView}>
              <Text style={[styles.semiBoldOrange, {marginTop: 10}]}>
                Mounas Owes You
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Text style={[styles.semiBoldOrange, {fontSize: 50}]}>
                  PKR350.00
                </Text>
              </View>
            </View>
            <Text style={styles.semiboldGrey}>
              How much cash have you received?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginTop: 50,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.whiteSemiBold}>PKR350.00</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Billdetails')}
                style={[
                  styles.btn,
                  {
                    backgroundColor: WHITE.btntxtColor,
                    borderWidth: 1,
                    borderColor: ORANGE.dark,
                  },
                ]}>
                <Text style={[styles.whiteSemiBold, {color: ORANGE.dark}]}>
                  Other
                </Text>
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
  semiBoldOrange: {
    fontFamily: FONT.Popins.semi_bold,
    fontSize: 18,
    color: ORANGE.dark,
    textAlign: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(index);
