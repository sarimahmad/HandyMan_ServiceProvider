/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Header from '../../Components/Header';
import {GREEN, GREY, ORANGE, WHITE} from '../../helper/Color';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {FONT, SCREEN} from '../../helper/Constant';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editType: false,
      MoveOnChat: 0,
      editType2: true,
      editType3: false,
    };
  }
  Information(StartTxt, EndTxt) {
    return (
      <View style={styles.InformationView}>
        <Text style={styles.StartTxt}>{StartTxt}</Text>
        <View style={{width: '28%'}}>
          <Text style={[styles.StartTxt, {color: ORANGE.dark}]}>{EndTxt}</Text>
        </View>
      </View>
    );
  }
  confirmAndChat() {
    if (this.state.editType) {
      this.props.navigation.navigate('Chat');
    }
    this.setState({editType: true});
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          headerText="Confirmation"
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
          </View>
          <View style={{position: 'absolute', bottom: 80}}>
            <SlidingUpPanel
              ref={c => (this._panel = c)}
              draggableRange={{
                top: this.state.editType2
                  ? SCREEN.height * 0.62
                  : SCREEN.height * 0.7,
                bottom: SCREEN.height * 0.22,
              }}
              animatedValue={this._draggedValue}
              showBackdrop={false}>
              <View
                style={[
                  styles.SliderView,
                  {
                    height: this.state.editType2
                      ? SCREEN.height * 0.6
                      : SCREEN.height * 0.78,
                  },
                ]}>
                <ScrollView bounces={true}>
                  <View style={styles.Sliderheader}>
                    <Text style={styles.whiteTxt}>Instant Booking</Text>
                  </View>
                  <View style={styles.ProfileView}>
                    <Text
                      style={[
                        styles.whiteTxt,
                        {fontSize: 14, color: GREY.light},
                      ]}>
                      300 Rs. Per hour
                    </Text>
                    <View style={{alignItems: 'center', marginTop: 13}}>
                      <Image
                        style={{width: 68, height: 68, borderRadius: 35}}
                        source={require('../../assets/image2.png')}
                      />
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.OrangeTxt}>4.9</Text>
                        <Image
                          style={{width: 15, height: 15}}
                          source={require('../../assets/star.png')}
                        />
                      </View>
                    </View>
                    <Image
                      style={{width: 50, height: 50}}
                      source={require('../../assets/AwardIcon.png')}
                    />
                  </View>
                  {this.Information('Name', 'Zia Ansari')}
                  {this.Information('Experience', '5+ years')}
                  {this.Information('Service', 'Electrician')}
                  {this.Information('Level', 'New')}
                  {this.Information('Jobs Completed', '435+')}
                  {this.state.editType2 &&
                    this.Information('Visit Fee + First Hour', '300 Rs.')}

                  {this.state.editType2 ? (
                    this.Information(
                      this.state.editType ? 'Jobs Completed' : 'Arrival Time',
                      this.state.editType ? '435' : '10 Min',
                    )
                  ) : (
                    <View>
                      <View
                        style={{
                          borderTopWidth: 1,
                          marginTop: 20,
                          borderColor: GREY.placeHolderColor,
                          backgroundColor: WHITE.btntxtColor,
                          borderBottomEndRadius: 10,
                          borderBottomStartRadius: 10,
                          shadowColor: GREY.light,
                          shadowOffset: {
                            width: 0,
                            height: 4,
                          },
                          shadowOpacity: 0.15,
                          shadowRadius: 6,

                          marginBottom: this.state.editType3 ? 21 : 27,
                        }}>
                        <Text style={{marginTop: 10, textAlign: 'center'}}>
                          Your service is in porgress
                        </Text>

                        <View style={styles.InProgressItemView}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{width: 34, height: 34, marginRight: 15}}
                              source={require('../../assets/Clock.png')}
                            />
                            <Text>Start Time</Text>
                          </View>
                          <Text
                            style={[
                              styles.whiteTxt,
                              {color: ORANGE.dark, fontSize: 14},
                            ]}>
                            19-July-2021 03:26 PM
                          </Text>
                        </View>
                        <View style={styles.InProgressItemView}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{width: 34, height: 34, marginRight: 15}}
                              source={require('../../assets/Clock.png')}
                            />
                            <Text>Start Time</Text>
                          </View>
                          <Text
                            style={[
                              styles.whiteTxt,
                              {color: ORANGE.dark, fontSize: 14},
                            ]}>
                            19-July-2021 03:26 PM
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.InProgressItemView,
                            {borderBottomWidth: 0},
                          ]}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{width: 34, height: 34, marginRight: 15}}
                              source={require('../../assets/Clock.png')}
                            />
                            <Text>Start Time</Text>
                          </View>
                          <Text
                            style={[
                              styles.whiteTxt,
                              {color: ORANGE.dark, fontSize: 14},
                            ]}>
                            19-July-2021 03:26 PM
                          </Text>
                        </View>
                      </View>
                      {this.state.editType3 && (
                        <View style={styles.PayableView}>
                          <Text>Total payable</Text>
                          <Text
                            style={[
                              styles.whiteTxt,
                              {color: ORANGE.dark, fontSize: 14},
                            ]}>
                            405 Rs.
                          </Text>
                        </View>
                      )}
                    </View>
                  )}

                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    {this.state.editType2 ? (
                      <TouchableOpacity style={styles.LowerView}>
                        <TouchableOpacity
                          onPress={() => this.confirmAndChat()}
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
                            {this.state.editType ? 'CHAT' : 'CONFIRM'}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => this.setState({editType2: false})}
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
                            CANCEL
                          </Text>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    ) : (
                      <View>
                        {this.state.editType3=== false ? (
                          <TouchableOpacity
                            onPress={() => this.setState({editType3: true})}
                            style={[
                              styles.LowerView,
                              {backgroundColor: ORANGE.dark},
                            ]}>
                            <Text style={styles.whiteTxt}>Contact Support</Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity style={styles.LowerView}>
                            <TouchableOpacity
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
                                Review
                              </Text>
                            </TouchableOpacity>
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
                                Later
                              </Text>
                            </TouchableOpacity>
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                  </View>
                </ScrollView>
              </View>
            </SlidingUpPanel>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
  },
  SliderView: {
    width: SCREEN.width,
    position: 'absolute',
    backgroundColor: WHITE.btntxtColor,
    borderRadius: 15,
  },
  Sliderheader: {
    backgroundColor: ORANGE.dark,
    height: 37,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  whiteTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 20,
    color: WHITE.btntxtColor,
  },
  ProfileView: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  OrangeTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 14,
    color: ORANGE.dark,
  },
  InformationView: {
    flexDirection: 'row',
    height: 39,
    width: '100%',
    backgroundColor: WHITE.btntxtColor,
    // borderBottomWidth: 0.17,
    // borderStartWidth: 0.17,
    // borderEndWidth: 0.17,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(112, 112, 112,0.8)',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    marginBottom: 10,
    shadowColor: GREY.light,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 10,
  },
  StartTxt: {
    fontFamily: FONT.Popins.regular,
    fontSize: 16,
    color: GREY.light,
  },
  LowerView: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: ORANGE.dark,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BTN: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ORANGE.dark,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  InProgressItemView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: GREY.placeHolderColor,
    paddingBottom: 20,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
    marginTop: 30,
  },
  PayableView: {
    height: 47,
    width: '100%',
    backgroundColor: WHITE.btntxtColor,
    shadowColor: GREY.light,
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 30,
    flexDirection: 'row',
    marginBottom: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
