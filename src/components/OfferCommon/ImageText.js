import React, {useContext} from "react";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Image, TouchableOpacity, View} from "react-native";
import {MyText} from "../Common/Text/MyText";
import {ThemeContext} from "../../contexts/ThemeContext";
import {navigate} from "../../RootMethods/RootNavigation";

export const ImageText = (props) => {
    let {myColors} = useContext(ThemeContext);
    let {text, textStyle, imageAlias, imageStyle, isLastItem, redirectUrl} = props;
    let imageUrl = null;

    if (imageAlias == "user"){
        imageUrl = require('../../assets/image/user/profile/frame.png')
    }else if(imageAlias == "password"){
        imageUrl = require('../../assets/image/user/profile/password.png')
    }else if(imageAlias == "notification"){
        imageUrl = require('../../assets/image/user/profile/notification.png')
    }else if(imageAlias == "privacy_policy"){
        imageUrl = require('../../assets/image/user/profile/privacy-policy.png')
    }else if(imageAlias == "terms_of_user"){
        imageUrl = require('../../assets/image/user/profile/terms-of-use.png')
    }else if(imageAlias == "logout"){
        imageUrl = require('../../assets/image/user/profile/logout.png')
    }


    return (
        <TouchableOpacity onPress={() => navigate(redirectUrl)}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: !isLastItem ? 1 : 0,
                borderBottomColor: myColors.darkWhite,
                width: wp(85),
                height: hp(6.5),
            }}>

                <Image
                    resizeMode={"contain"}
                    source={imageUrl}
                    style={{
                        width: wp(8),
                        height: wp(8),
                        ...imageStyle
                    }}
                />

                <MyText
                    text={text}
                    textStyle={{
                        color: myColors.greyText2,
                        fontWeight: 700,
                        fontSize: wp(3),
                        marginLeft: wp(3),
                        ...textStyle
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

ImageText.defaultProps = {
    isLastItem: false
}
