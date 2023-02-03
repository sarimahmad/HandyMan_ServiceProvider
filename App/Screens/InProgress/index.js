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
import MapView, {Marker} from 'react-native-maps';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisible: true,
      showAddress: false,
    };
  }
  closeModal(){
    this.props.navigation.navigate(
      'ServiceEnded',
      this.setState({ModalVisible: false}),
    );
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          BoldTxt={false}
          headerText="In Progress"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />

        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 31.4883884,
            longitude: 74.3434766,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>

        <SafeAreaView style={{flex: 1}}></SafeAreaView>
        <Modal transparent={true} visible={this.state.ModalVisible}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: '100%',
                height: SCREEN.height / 2.9,
                backgroundColor: ORANGE.extraLight,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '70%',
                  justifyContent: 'space-between',
                }}>
                <Image
                  style={{
                    width: 7.12,
                    height: 12.5,
                    marginTop: 22,
                    marginLeft: 22,
                  }}
                  source={require('../../assets/arrowUp.png')}
                />
                <View>
                  <Text style={styles.boldBlack}>Customer Notified</Text>
                  <Text style={styles.mediumBlack}>Mounas</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  marginTop: 13,
                }}>
                <View
                  style={{
                    width: '42%',
                    borderBottomWidth: 1,
                    borderColor: GREY.light,
                  }}
                />
                <View
                  style={{
                    width: '16%',
                    height: 22,
                    backgroundColor: ORANGE.dark,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                  }}>
                  <Text style={styles.whiteSemiBold}>03:59</Text>
                </View>
                <View
                  style={{
                    width: '42%',
                    borderBottomWidth: 1,
                    borderColor: GREY.light,
                  }}
                />
              </View>
              <Image
                style={{
                  width: 46,
                  height: 46,
                  alignSelf: 'flex-end',
                  marginTop: 12,
                }}
                source={require('../../assets/phoneIcon.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 22,
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Image
                  style={{width: 29, height: 29, marginRight: 10}}
                  source={require('../../assets/centerIcon.png')}
                />
                <Text>Electrician</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 26,
                  alignItems: 'center',
                  marginTop: 16,
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 26,
                    resizeMode: 'contain',
                    marginRight: 14,
                  }}
                  source={require('../../assets/location.png')}
                />
                <Text style={{width: '70%'}}>
                  h#197-B, tech society, canal road, Lahore, Punjab
                </Text>
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={styles.LowerView}>
                  <TouchableOpacity
                    style={[
                      styles.BTN,
                      {
                        backgroundColor: WHITE.btntxtColor,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.whiteTxt,
                        {
                          color: ORANGE.dark,
                        },
                      ]}>
                      Call Support
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.closeModal()}
                    style={[
                      styles.BTN,
                      {
                        backgroundColor: ORANGE.dark,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.whiteTxt,
                        {
                          color: WHITE.btntxtColor,
                        },
                      ]}>
                      Finish Work
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
  LowerView: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: ORANGE.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BTN: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ORANGE.dark,
  },
  boldBlack: {
    fontFamily: FONT.Popins.bold,
    fontSize: 18,
    color: BLACK.dark,
  },
  mediumBlack: {
    fontFamily: FONT.Popins.medium,
    fontSize: 16,
    color: BLACK.dark,
    textAlign: 'center',
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
    fontSize: 14,
    color: WHITE.btntxtColor,
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
