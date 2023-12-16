import React, {Component, useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {ThemeContext} from "../../../contexts/ThemeContext";

export const SocialLogin = () => {
    let {myColors} = useContext(ThemeContext);
    let [socialLogins, setSocialLogins] = useState([]);
    let [socialLoginViewStyle, setSocialLoginViewStyle] = useState({});
    let socialLoginLogo = null;


    useEffect(() => {
        setSocialLoginViewStyle({
            width: wp(17),
            height: wp(17),
            borderWidth: wp(0.1),
            borderColor: myColors.darkWhite,
            borderRadius: wp(50),
            alignItems: 'center',
            justifyContent: 'center'
        });

        let allSocialLogins = [
            "google",
            "apple"
        ];

        setSocialLogins(allSocialLogins);

        console.log(socialLogins);
    }, [1])

    return (
        socialLogins.map(socialLogin => {
            if (socialLogin == "google"){
                socialLoginLogo = require("../../../assets/image/security/home/google-logo.png");
            }else if(socialLogin == "apple"){
                socialLoginLogo = require("../../../assets/image/security/home/apple-logo.png");
            }


            return (
                <View style={socialLoginViewStyle}>
                    <Image
                        source={socialLoginLogo}
                        resizeMode={"contain"}
                        style={{
                            width: wp(8),
                        }}
                    />
                </View>
            )
        })
    )
}
