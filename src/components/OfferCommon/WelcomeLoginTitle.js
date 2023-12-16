import React from "react";
import {MyText} from "../Common/Text/MyText";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Image, View} from "react-native";

export const WelcomeLoginTitle = (props) => {
    let {textContent, textStyle} = props;
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MyText text={textContent} textStyle={textStyle} />
            <Image style={{marginTop: wp(0.3), width: wp(5), height: wp(4.5) }} resizeMode={'contain'} source={require('../../assets/image/no-login-home-screen/header/hello.png')} />
        </View>
    )
}
