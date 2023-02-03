import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {APP, BLACK, BLUE, WHITE} from '../../helper/Color';
import {FONT} from '../../helper/Constant';

import * as userActions from '../../redux/actions/user';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      setTimeout(
        function () {
          this.props.navigation.navigate('IntroScreen');
        }.bind(this),
        1000,
      );
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Image
          style={styles.iconImage}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.popin40Bold}>Elite Rozgar</Text>
        <Text style={styles.popin20Bold}>Handyman Service</Text>
        <Text style={styles.popin14Regular}>Developed by Elite Apps</Text>
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
  iconImage: {
    height: 155,
    width: 147,
    resizeMode: 'contain',
  },
  popin40Bold: {
    fontSize: 40,
    fontFamily: FONT.Popins.bold,
    color: BLUE.app,
    marginTop: 50,
  },
  popin20Bold: {
    fontSize: 20,
    fontFamily: FONT.Popins.bold,
    color: APP.light,
  },
  popin14Regular: {
    fontSize: 14,
    fontFamily: FONT.Popins.regular,
    color: BLACK.light,
    position: 'absolute',
    bottom: 40,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
