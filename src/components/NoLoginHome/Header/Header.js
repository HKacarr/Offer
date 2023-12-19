import React, {Component, useContext} from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyText} from "../../Common/Text/MyText";
import {MyIcon} from "../../Common/VectorIcon/MyIcon";
import SelectLanguage from "./SelectLanguage";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import {ThemeContext} from "../../../contexts/ThemeContext";
import {WelcomeLoginTitle} from "../../OfferCommon/WelcomeLoginTitle";
import {navigate} from "../../../RootMethods/RootNavigation";
import {CircleIcon} from "../../OfferCommon/CircleIcon";

const Header = (props) => {
    let {userLogoSource, signInText, isRecording, handleLogin, handleRecording} = props;
    let {myColors} = useContext(ThemeContext);

    return (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/** Left Side - Start */}
            {
                isRecording ?
                    <CircleIcon
                        pressFunction={handleRecording}
                        iconName={"arrow-left"}
                        iconGroup={"SimpleLineIcons"}
                        iconColor={myColors.greyText2}
                    />
                    :
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => navigate("ProfileScreen")}>
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
                        </TouchableOpacity>


                        <View style={{justifyContent: 'center', rowGap: 4, marginLeft: wp(2.5)}}>
                            {/** Hello Text - Start */}
                            <WelcomeLoginTitle
                                textContent={"Hello"}
                                textStyle={{
                                color: myColors.greyText,
                                marginRight: 3,
                                fontSize: wp(4),
                            }} />
                            {/** Hello Text - End */}



                            {/** User Name or Sign In Text - Start */}
                            <View>
                                <TouchableOpacity onPress={() => handleLogin()}>
                                    <MyText text={signInText} textStyle={{
                                        color: myColors.greyText2,
                                        fontSize: wp(4),
                                        fontWeight: 700,
                                    }}/>
                                </TouchableOpacity>

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
                                color: myColors.greyText2,
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
                        <TouchableOpacity onPress={() => navigate("NotificationsScreen")} >
                            <View style={{
                                width: wp('11.5%'),
                                height: wp('11.5%'),
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: myColors.darkWhite,
                                borderRadius: wp('10%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: wp(2)
                            }}>
                                <MyIcon
                                    iconName={"bell-o"}
                                    iconGroup={"FontAwesome"}
                                    iconStyle={{
                                        color: myColors.greyText2,
                                        fontSize: wp(6.3)
                                    }}/>
                            </View>
                        </TouchableOpacity>
                }
            </View>
            {/** Right Side - End */}
        </View>
    )
}

export default Header;
