import React, {useContext} from 'react';
import {View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {CircleIcon} from "./CircleIcon";
import {navigate} from "../../RootMethods/RootNavigation";
import {MyText} from "../Common/Text/MyText";
import {ThemeContext} from "../../contexts/ThemeContext";

export const TitleHeader = (props) => {
    const {myColors} = useContext(ThemeContext);
    let {title, parentViewStyle, redirectUrl} = props;
    return (
        <View style={{
            flexDirection: 'row',
            ...parentViewStyle
        }}>
            {/** Go Back - Start */}
            <View style={{
                width: wp(12),
            }}>
                <CircleIcon
                    pressFunction={() => navigate(redirectUrl)}
                    iconName={"arrow-left"}
                    iconGroup={"SimpleLineIcons"}
                    iconColor={myColors.greyText2}
                />
            </View>
            {/** Go Back - End */}


            {/** Title - Start */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: wp(70)
            }}>
                <MyText
                    text={title}
                    textStyle={{
                        color: myColors.greyText2,
                        fontWeight: 600,
                        fontSize: wp(4.5)
                    }}
                />
            </View>
            {/** Title - End */}



            {/** Search - Start */}
            <View style={{
                width: wp(12),
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>
                <CircleIcon
                    pressFunction={() => alert(1)}
                    iconName={"search"}
                    iconGroup={"Feather"}
                    iconColor={myColors.greyText2}
                    iconStyle={{color: myColors.greyText2, fontSize: hp("3%")}}
                />
            </View>
            {/** Search - End */}
        </View>
    )
}
