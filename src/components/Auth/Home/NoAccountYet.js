import React, {Component, useContext} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyText} from "../../Common/Text/MyText";
import {TouchableOpacity, View} from "react-native";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {navigate} from "../../../RootMethods/RootNavigation";

const NoAccountYet = (props) => {
    let {firstText, firstTextStyle, linkText, linkTextStyle, navigateScreen} = props;
    let {myColors} = useContext(ThemeContext);

    return (
        <View style={{
            // flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            // marginTop: wp(7),
        }}>
            <MyText
                text={firstText}
                textStyle={firstTextStyle}
            />

            <TouchableOpacity
                style={{
                    marginLeft: wp(1),
                }}
                onPress={() => navigate(navigateScreen)}
            >
                <MyText
                    text={linkText}
                    textStyle={linkTextStyle}
                />
            </TouchableOpacity>
        </View>
    )
}

export default NoAccountYet;
