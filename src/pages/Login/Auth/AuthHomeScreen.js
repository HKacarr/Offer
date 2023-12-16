import React, {useContext, useEffect, useState} from "react";
import {Image, ImageBackground, View, SafeAreaView, TouchableOpacity} from "react-native";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {MyText} from "../../../components/Common/Text/MyText";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {LoginButton} from "../../../components/Auth/Home/LoginButton";
import NoAccountYet from "../../../components/Auth/Home/NoAccountYet";

export const AuthHomeScreen = (props) => {
    let {myColors} = useContext(ThemeContext)
    let [buttonsObj, setButtonsObj] = useState([]);

    useEffect(() => {
        setButtonsObj([
            {
                "alias": "google",
                "text": "Login with Google",
                "url": "../../../assets/image/security/home/google-logo.png"
            },
            {
                "alias": "apple",
                "text": "Login with Apple",
                "url": "../../../assets/image/security/home/apple-logo.png"
            },
            {
                "alias": "mail",
                "text": "Login with E-Mail",
                "url": "../../../assets/image/security/home/mail-logo.png"
            }
        ])
    }, [1]);


    return (
        <View style={{backgroundColor: myColors.offerPurple, flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                {/** Background and Content - Start */}
                <ImageBackground
                    style={{
                        width: wp(100),
                        height: wp(107),
                        marginTop: wp(1),
                        alignItems: "center"
                    }}
                    resizeMode={"cover"}
                    source={require("../../../assets/image/security/home/wave-and-mic.png")}
                >

                    {/** Title - Start */}
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <MyText
                            text={"Let's Get Started"}
                            textStyle={{
                                fontSize: wp(10.7),
                                fontWeight: 700,
                                color: myColors.darkViewTextColor,
                                paddingTop: wp(3)
                            }}
                        />
                    </View>
                    {/** Title - End */}


                    {/** Audio wave - Start */}
                    <Image
                        style={{
                            width: wp(30),
                            height: hp(8),
                            marginTop: wp(10),
                            marginLeft: wp(27)
                        }}
                        resizeMode={"contain"}
                        source={require("../../../assets/image/security/home/auth-home-wave.png")}
                    />
                    {/** Audio wave - End */}
                </ImageBackground>
                {/** Background and Content - End */}



                {/** Bottom of the BG Image - Start */}
                <View style={{
                    alignItems: 'center',
                    marginTop: wp(4),
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    {/** Login Buttons - Start */}
                    <View style={{
                        flex: 5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <LoginButton buttonsObj={buttonsObj} />
                    </View>
                    {/** Login Buttons - End */}



                    {/** No Account Yet - Start */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <NoAccountYet
                            firstText={"No account yet"}
                            firstTextStyle={{
                                color: myColors.pageBGColor,
                                fontWeight: 500,
                                fontSize: wp(3)
                            }}
                            linkText={"Create An Account"}
                            linkTextStyle={{
                                color: myColors.waterGreen,
                                fontWeight: 700,
                                lineHeight: hp(1.7),
                                fontSize: wp(3),
                                textDecorationLine: 'underline',
                            }}
                        />
                    </View>
                    {/** No Account Yet - End */}
                </View>
                {/** Bottom of the BG Image - End */}
            </SafeAreaView>
        </View>
    )
}
