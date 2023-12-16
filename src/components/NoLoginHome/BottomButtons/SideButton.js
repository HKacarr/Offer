import React, {Component, useContext} from 'react';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Image, View} from "react-native";
import {MyIcon} from "../../Common/VectorIcon/MyIcon";
import {ThemeContext} from "../../../contexts/ThemeContext";

const SideButton = (props) => {
    let {isRecording, isLeft} = props;
    let {myColors} = useContext(ThemeContext)
    return (
        <View style={{
            width: wp('12%'),
            height: wp('12%'),
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: myColors.darkWhite,
            borderRadius: wp('10%'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isRecording ? myColors.viewBGColor : myColors.pageBGColor
        }}>
            {
                isRecording ?
                    <MyIcon
                        iconName={isLeft ? "x" : "check"}
                        iconGroup={"Feather"}
                        iconStyle={{
                            fontSize: wp(7),
                            fontWeight: 500,
                            color: myColors.offerPurple
                        }}/>
                    :
                    <Image
                        style={{
                            width: wp(8),
                        }}
                        resizeMode={"contain"}
                        source={isLeft ? require("../../../assets/image/no-login-home-screen/content/document-upload.png") : require("../../../assets/image/no-login-home-screen/content/direct.png")}/>
            }
        </View>
    )
}

export default SideButton;
