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
  FlatList,
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
          headerText="Privacy Policy"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <Text style={[styles.headingtxt, {marginTop: 47}]}>
              Renova company
            </Text>
            <Text style={styles.explainTxt}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical from repetition, injected
              humou
            </Text>
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
    width: SCREEN.width - 65,
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: FONT.Popins.medium,
    fontSize: 14,
    color: BLACK.dark,
  },
  explainTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 12,
    color: GREY.dark,
    width: '100%',
    marginTop: 10,
  },
});
