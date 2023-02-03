import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';

import {APP, BLACK, WHITE} from '../../helper/Color';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';

import * as userActions from '../../redux/actions/user';
class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Swiper
          scrollEnabled={true}
          loop={false}
          pagingEnabled={true}
          showsButtons={false}
          showsPagination={false}
          onIndexChanged={index => this.setState({selectedIndex: index})}>
          <View style={styles.slideWrapper}>
            <Image
              style={styles.absoluteBackImage}
              source={require('../../assets/intro1_background.png')}
            />
            <View style={styles.absoluteOverView} />
            <View style={styles.bottomView}>
              <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
              />
              <Text style={styles.popin20Bold}>
                Need Professional Help{'\n'}With Your Project
              </Text>
              <Text style={styles.popin16Medium}>
                Contrary to popular belief, Lorem{'\n'}Lorem Ipsum is not simply
                rando
              </Text>
            </View>
          </View>
          <View style={styles.slideWrapper}>
            <Image
              style={styles.absoluteBackImage}
              source={require('../../assets/intro2_background.png')}
            />
            <View style={styles.absoluteOverView} />
            <View style={styles.bottomView}>
              <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
              />
              <Text style={styles.popin20Bold}>
                We Provide One Of The Best{'\n'}Handyman Services
              </Text>
              <Text style={styles.popin16Medium}>
                Contrary to popular belief, Lorem{'\n'}Ipsum is not simply rando
              </Text>
            </View>
          </View>
          <View style={styles.slideWrapper}>
            <Image
              style={styles.absoluteBackImage}
              source={require('../../assets/intro3_background.png')}
            />
            <View style={styles.absoluteOverView} />
            <View style={styles.bottomView}>
              <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
              />
              <Text style={styles.popin20Bold}>
                Offer Reliable Services For{'\n'}Most Home Services
              </Text>
              <Text style={styles.popin16Medium}>
                Contrary to popular belief, Lorem{'\n'}Lorem Ipsum is not simply
                rando
              </Text>
            </View>
          </View>
        </Swiper>
        <View style={styles.pagerViewWrapper}>
          <View
            style={
              this.state.selectedIndex === 0
                ? styles.selectedView
                : styles.unSelectedView
            }
          />
          <View
            style={
              this.state.selectedIndex === 1
                ? styles.selectedView
                : styles.unSelectedView
            }
          />
          <View
            style={
              this.state.selectedIndex === 2
                ? styles.selectedView
                : styles.unSelectedView
            }
          />
          <Text
            style={styles.skipRightText}
            onPress={() => this.props.navigation.navigate('Login')}>
            SKIP
          </Text>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, access_token, role) =>
      dispatch(userActions.setUser({user, access_token, role})),
  };
};

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btntxtColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: SCREEN.height,
    width: SCREEN.width,
  },
  slideWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  absoluteBackImage: {
    height: SCREEN.height,
    width: SCREEN.width,
    position: 'absolute',
    resizeMode: 'stretch',
  },
  bottomView: {
    height: SCREEN.height / 1.86,
    width: SCREEN.width,
  },
  absoluteOverView: {
    height: '95%',
    width: '100%',
    backgroundColor: APP.extra_light,
    position: 'absolute',
    top: 0,
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    resizeMode: 'stretch',
  },
  popin20Bold: {
    fontFamily: FONT.Popins.bold,
    marginTop: 40,
    color: BLACK.dark,
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
  popin16Medium: {
    fontFamily: FONT.Popins.medium,
    marginTop: 20,
    color: BLACK.light,
    alignSelf: 'center',
    fontSize: 16,
    textAlign: 'center',
  },
  pagerViewWrapper: {
    width: SCREEN.width - 84,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: isIphoneXorAbove ? 70 : 40,
  },
  selectedView: {
    height: 10,
    width: 38,
    borderRadius: 7,
    backgroundColor: APP.dark,
    marginRight: 5,
  },
  unSelectedView: {
    height: 10,
    width: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: APP.dark,
    marginRight: 5,
  },
  skipRightText: {
    position: 'absolute',
    right: 0,
    fontSize: 18,
    fontFamily: FONT.Popins.regular,
    color: BLACK.dark,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen);
