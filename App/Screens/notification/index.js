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
  FlatList
} from 'react-native';

import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
import Header from '../../Components/Header';
import {BLACK, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[{id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
            {id:6},
            {id:7},
            {id:8},
            {id:9},
            {id:10},]
        };
      }
  render() {
    return (
      <View style={styles.wrapperView}>
            <Header
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.goBack()}
          headerText="Notifications"
          headerTextColor={WHITE.btntxtColor}
          backColor={ORANGE.dark}
        />
        <SafeAreaView style={{flex: 1}}> 
        <View style={[styles.mainView,{marginTop: 49}]}>
            <FlatList
            data={this.state.data}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={({item})=> (
                <View style={styles.shadowView}>
                    <View style={styles.roundView}>
                        <Image style={{width: 24, heightL:27, resizeMode:'contain'}} source={require('../../assets/notification.png')}/>
                     </View>   
                <View>
                    <Text style={{fontSize: 16}}>Recessed Lighting</Text>
                    <Text style={{fontFamily: FONT.Popins.medium, fontSize: 12, color: GREY.light}}>16December, 2021</Text>
                 </View>   
                </View>    
            )}

            />
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
  },
  log: {
    height: 100,
    width: 100,
    borderRadius: 45,
    alignSelf: 'center',
  },
  shadowView: {
    width: '90%',
    alignSelf:'center',
    height: 80,
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    shadowOffset: {
      width: -6,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection:'row',
    borderRadius: 10,
    marginBottom: 10,
alignItems:'center',

  },
  roundView:{
    height: 51,
    width: 51,
    borderRadius: 35,
    backgroundColor: ORANGE.extraLight,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal: 19
  },
  IconSize: {
    width: 14,
    height: 14,
    marginRight: 13.8,
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
    marginTop: 35,
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
  mediusGrey: {
    fontFamily: FONT.Popins.medium,
    fontSize: 12,
    color: GREY.extraLight,
    textAlign: 'center',
  },
  ValueTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 14,
    color: GREY.extraLight,
  },
});
