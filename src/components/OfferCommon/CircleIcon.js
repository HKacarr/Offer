import React, {useContext} from "react";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {TouchableOpacity} from "react-native";
import {MyIcon} from "../Common/VectorIcon/MyIcon";
import {ThemeContext} from "../../contexts/ThemeContext";

export const CircleIcon = (props) => {
    let {myColors} = useContext(ThemeContext);
    let {pressFunction, iconName, iconGroup, iconColor, iconStyle, isIcon, frameStyle} = props;

    return (
        <TouchableOpacity
            onPress={pressFunction}
            style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: myColors.darkWhite,
                width: wp(10),
                height: wp(10),
                borderRadius: wp(50),
                ...frameStyle
            }}>

            {
                isIcon ?
                <MyIcon
                    iconName={iconName}
                    iconGroup={iconGroup}
                    iconStyle={{
                        color: iconColor,
                        fontSize: wp(5.3),
                        ...iconStyle
                    }}
                />
                :
                ""
            }

        </TouchableOpacity>
    )
}

CircleIcon.defaultProps = {
    isIcon: true
}
