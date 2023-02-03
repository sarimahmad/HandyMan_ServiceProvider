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
import {BLACK, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MapView, {Marker} from 'react-native-maps';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisible: false,
      showAddress: false,
    };
  }
  showAddress() {
    if (this.state.showAddress) {
      this.props.navigation.navigate(
        'Arrived',
        this.setState({ModalVisible: false}),
      );
    }
    this.setState({showAddress: true});
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          BoldTxt={false}
          headerText="You're Offline"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <MapView
              style={{width: '100%', height: '100%'}}
              initialRegion={{
                latitude: 31.4883884,
                longitude: 74.3434766,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}></MapView>
            <TouchableOpacity
              onPress={() => this.setState({ModalVisible: true})}>
              <Image
                style={{position: 'absolute', alignSelf: 'center', bottom: 0}}
                source={require('../../assets/Go.png')}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Modal visible={this.state.ModalVisible} transparent={true}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: this.state.showAddress
                  ? SCREEN.height * 0.3
                  : SCREEN.height * 0.25,
                backgroundColor: ORANGE.extraLight,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '65%',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Image
                  style={{width: 32, height: 32}}
                  source={require('../../assets/chat.png')}
                />
                <Text style={styles.mediumBlack}>Electrician</Text>
              </View>
              <Image
                style={{
                  width: 67,
                  height: 67,
                  marginTop: 9,
                  alignSelf: 'center',
                }}
                source={require('../../assets/centerIcon.png')}
              />
              <Text style={{textAlign: 'center', marginTop: 5}}>00:10</Text>
              {this.state.showAddress && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 25,
                    marginBottom: 25,
                    marginTop: 12,
                  }}>
                  <Image
                    style={{width: 17.4, height: 23, marginRight: 15}}
                    source={require('../../assets/location.png')}
                  />
                  <Text style={{width: '90%'}}>
                    h#197-B, tech society, canal road, Lahore, Punjab
                  </Text>
                </View>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 4,
                  marginLeft: 24,
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 25, height: 25, marginRight: 15}}
                  source={require('../../assets/distance.png')}
                />
                <Text>1.9 KM</Text>
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
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.showAddress()}
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
                      {this.state.showAddress ? 'Navigate' : 'Accept'}
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
    fontSize: 21,
    color: BLACK.dark,
    marginTop: 19,
  },
  mediumBlack: {
    fontFamily: FONT.Popins.medium,
    fontSize: 20,
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
