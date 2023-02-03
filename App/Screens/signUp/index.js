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
import ImagePicker from 'react-native-image-crop-picker';
class index extends Component {
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
  PicMultiple(type) {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      switch (type) {
        case 0: {
          this.setState({frontId: image.path});
          let image_data = {
            uri: image.path,
            type: image.mime,
            name: image.path.substring(image.path.lastIndexOf('/') + 1),
          };
          this.setState({frontIdobj: image_data});
          break;
        }
        case 1: {
          this.setState({backId: image.path});
          let image_data = {
            uri: image.path,
            type: image.mime,
            name: image.path.substring(image.path.lastIndexOf('/') + 1),
          };
          this.setState({backIdobj: image_data});
          break;
        }
      }
    });
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="Registration"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View style={styles.mainView}>
              <Image
                style={styles.log}
                source={require('../../assets/logo.png')}
              />
              <Text style={[styles.boldBlack, {alignSelf: 'center'}]}>
                OTP Number
              </Text>
              <Image
                style={styles.log}
                source={require('../../assets/profileUpload.png')}
              />
              <View style={[styles.LoginView, {marginTop: 43}]}>
                <Text style={styles.mediumBlack}>Name</Text>
                <View style={styles.borderLine} />
                <TextInput style={{fontSize: 14}} placeholder={'Max lusia'} />
              </View>
              <View style={styles.LoginView}>
                <Text style={styles.mediumBlack}>Email Address</Text>
                <View style={styles.borderLine} />
                <TextInput style={{fontSize: 14}} placeholder={'Max lusia'} />
              </View>

              <View style={styles.LoginView}>
                <Text style={styles.mediumBlack}>Service</Text>
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
                    label: 'Select Service',
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

              <View style={styles.LoginView}>
                <Text style={styles.mediumBlack}>Experience</Text>
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
                    label: 'How much experience do you have?',
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

              {this.state.frontId === '' ? (
                <View style={styles.LoginView}>
                  <Text style={styles.mediumBlack}>Email Address</Text>
                  <View style={styles.borderLine} />
                  <TouchableOpacity
                    onPress={() => this.PicMultiple(0)}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.ValueTxt}>Front.jpg</Text>
                    <Image
                      style={{width: 16, height: 16}}
                      source={require('../../assets/add.png')}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <Image
                  style={{
                    width: '100%',
                    height: 91,
                    marginTop: 18,
                    borderRadius: 10,
                    resizeMode: 'stretch',
                  }}
                  source={{uri: this.state.frontId}}
                />
              )}

              {this.state.backId === '' ? (
                <View style={styles.LoginView}>
                  <Text style={styles.mediumBlack}>Email Address</Text>
                  <View style={styles.borderLine} />
                  <TouchableOpacity
                    onPress={() => this.PicMultiple(1)}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.ValueTxt}>Back.jpg</Text>
                    <Image
                      style={{width: 16, height: 16}}
                      source={require('../../assets/add.png')}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <Image
                  style={{
                    width: '100%',
                    height: 91,
                    marginTop: 18,
                    borderRadius: 10,
                    resizeMode: 'stretch',
                  }}
                  source={{uri: this.state.backId}}
                />
              )}

              <View style={styles.LoginView}>
                <Text style={styles.mediumBlack}>Per Hour Fee</Text>
                <View style={styles.borderLine} />

                <Text style={styles.ValueTxt}>249 Rs.</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={styles.SignInBtn}>
                <Text style={[styles.semiBoldWhite]}>Register</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    marginTop: 20,
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
