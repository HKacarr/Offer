import React, {Component, useContext} from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyText} from "../../Common/Text/MyText";
import {MyIcon} from "../../Common/VectorIcon/MyIcon";
import SelectLanguage from "./SelectLanguage";
import {ForwardBack} from "../../NavBar/ForwardBack";
import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const Header = (props) => {
    let {userLogoSource, signInText, isRecording} = props;

    return (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/** Left Side - Start */}
            {
                isRecording ?
                    <TouchableOpacity
                        onPress={() => alert(1)}
                        style={{
                            // flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: "#ECEEF1",
                            width: wp(10),
                            height: wp(10),
                            borderRadius: wp(50),
                        }}>

                        <SimpleLineIcons
                            style={{color: "#435474", fontSize: hp("2.2%")}}
                            name={"arrow-left"}/>

                    </TouchableOpacity>
                    :
                    <View style={{flexDirection: 'row'}}>
                        <ImageBackground
                            style={{
                                padding: 12,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            resizeMode={"contain"}
                            source={require("../../../assets/image/no-login-home-screen/header/purple-circle.png")}
                        >
                            <View>
                                <Image
                                    style={{width: wp(9), height: hp(5)}}
                                    resizeMode={"contain"}
                                    source={require("../../../assets/image/no-login-home-screen/header/frame.png")}/>
                            </View>
                        </ImageBackground>


                        <View style={{justifyContent: 'center', rowGap: 4, marginLeft: wp(2.5)}}>
                            {/** Hello Text - Start */}
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MyText text={"Hello "} textStyle={{
                                    color: '#818CA2',
                                    marginRight: 3,
                                    fontSize: wp(4),
                                }} />
                                <Image style={{marginTop: wp(0.3), width: wp(5), height: wp(4.5) }} resizeMode={'contain'} source={require('../../../assets/image/no-login-home-screen/header/hello.png')} />
                            </View>
                            {/** Hello Text - End */}



                            {/** User Name or Sign In Text - Start */}
                            <View>
                                <MyText text={signInText} textStyle={{
                                    color: "#435474",
                                    fontSize: wp(4),
                                    fontWeight: 700,
                                }}/>
                            </View>
                            {/** User Name or Sign In Text - End */}
                        </View>
                    </View>
            }
            {/** Left Side - End */}




            {/** Recording Text - Start */}
            {
                isRecording ?
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                    }}>
                        <MyText
                            text={"Recording"}
                            textStyle={{
                                color: "#435474",
                                fontWeight: 600,
                                fontSize: wp(5)
                            }}
                        />
                    </View>
                    :
                    ""
            }
            {/** Recording Text - End */}



            {/** Right Side - Start */}
            <View style={{justifyContent: 'flex-end', alignItems: 'center', flex: 1, flexDirection: 'row', gap: wp(3) }}>
                <SelectLanguage isRecording={isRecording} />

                {
                    isRecording ?
                        "" :
                        <View style={{
                            width: wp('11.5%'),
                            height: wp('11.5%'),
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: '#ECEEF1',
                            borderRadius: wp('10%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: wp(2)
                        }}>
                            <MyIcon
                                iconName={"bell-o"}
                                iconGroup={"FontAwesome"}
                                iconStyle={{
                                    color: "#435474",
                                    fontSize: wp(6.3)
                                }}/>
                        </View>
                }
            </View>
            {/** Right Side - End */}
        </View>
    )
}

export default Header;
