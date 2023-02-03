/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, TouchableOpacity,Text, SafeAreaView } from 'react-native';
import { FONT, isIphoneXorAbove, SCREEN } from '../../helper/Constant';

function Header({ leftPress, leftIcon,rightPress,  BoldTxt ,headerTextColor, backColor, headerText}) {
  return (
    <View
      style={{
        height: isIphoneXorAbove ? 120 : 100 ,
        width: SCREEN.width ,
        paddingHorizontal: 18,
        backgroundColor: backColor,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop:50,
      }}>

      { headerText && <View style={{flexDirection:'row', width: '100%',justifyContent:'center'}}>
        <Text style={{fontFamily: BoldTxt ? FONT.Popins.bold : FONT.Popins.regular, fontSize: 21, color: headerTextColor}}>{headerText}</Text>
        </View>} 
      
         
          {rightPress && <Image style={{height: 40, width: 40}} source={require('../../assets/headerIcon.png')}/>}
      
    </View>
  );
}

export default Header;
