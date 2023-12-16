import React, {Component, useContext, useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyText} from "../../Common/Text/MyText";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {navigate} from "../../../RootMethods/RootNavigation";
import {LoginScreen} from "../../../pages/Login/Auth/LoginScreen";

export const LoginButton = (props) => {
    let {myColors} = useContext(ThemeContext);
    let {buttonsObj} = props;
    let buttonUrl = null;

    const redirectAuthPage = (alias) => {
        if (alias == "mail"){
            navigate("LoginScreen")
        }
    }

    return (
        buttonsObj.map((btnObj) => {
            if (btnObj.alias == "google"){
                buttonUrl = require('../../../assets/image/security/home/google-logo.png')
            }else if(btnObj.alias == "apple"){
                buttonUrl = require('../../../assets/image/security/home/apple-logo.png')
            }else if(btnObj.alias == "mail"){
                buttonUrl = require('../../../assets/image/security/home/mail-logo.png')
            }


            return (
                <TouchableOpacity key={btnObj.alias} onPress={() => redirectAuthPage(btnObj.alias)}>
                    <View style={{
                        backgroundColor: myColors.pageBGColor,
                        width: wp(90),
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: wp(3),
                        borderRadius: wp(3),
                        flexDirection: 'row',
                        marginTop: wp(4.5)
                    }}>
                        <Image
                            style={{
                                width: wp(5),
                                height: wp(5),
                            }}
                            source={buttonUrl}
                            resizeMode={"contain"}
                        />
                        <MyText
                            text={btnObj.text}
                            textStyle={{
                                marginLeft: wp(2),
                                fontWeight: 600,
                                fontSize: wp(3.7),
                                color: myColors.noLoginTitle
                            }}
                        />
                    </View>
                </TouchableOpacity>
            )
        })
    )
}
