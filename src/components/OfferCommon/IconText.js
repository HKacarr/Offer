import React from "react";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyIcon} from "../Common/VectorIcon/MyIcon";
import {MyText} from "../Common/Text/MyText";
import {View} from "react-native";

export const IconText = (props) => {
    let {
        borderViewStyle,
        leftIconName,
        leftIconGroup,
        leftIconStyle,
        text,
        textStyle,
        isRightIcon,
        isLeftIcon,
        rightIconName,
        rightIconGroup,
        rightIconStyle,
    } = props;

    return (
        <View style={{
            width: wp(23),
            // height: wp(8.5),
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ECEEF1',
            borderRadius: wp('2.5%'),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(2.5),
            paddingVertical: wp(2),
            ...borderViewStyle
        }}>
            {
                isLeftIcon
                    ?
                    <MyIcon
                        iconName={leftIconName}
                        iconGroup={leftIconGroup}
                        iconStyle={{
                            color: "#435474",
                            fontWeight: 500,
                            fontSize: wp(5),
                            ...leftIconStyle
                        }}/>
                    :
                    ""
            }
            <MyText text={text} textStyle={{
                color: "#435474",
                fontSize: wp(3.5),
                fontWeight: 600,
                ...textStyle
            }}/>

            {
                isRightIcon
                ?
                <MyIcon
                    iconName={rightIconName}
                    iconGroup={rightIconGroup}
                    iconStyle={{
                        color: "#435474",
                        fontWeight: 500,
                        fontSize: wp(3),
                        ...rightIconStyle
                    }}/>
                :
                ""
            }

        </View>
    )
}

IconText.defaultProps = {
    isRightIcon: false,
    isLeftIcon: true,
}
