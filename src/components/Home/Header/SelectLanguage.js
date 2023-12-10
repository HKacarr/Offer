import React, {Component} from 'react';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Image, View} from "react-native";
import {MyText} from "../../Common/Text/MyText";
import {MyIcon} from "../../Common/VectorIcon/MyIcon";

const SelectLanguage = (props) => {
    let {isRecording} = props;

    return (
        <View style={{
            width: isRecording ? wp(17) : wp(21),
            height: wp(8.5),
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ECEEF1',
            borderRadius: wp('10%'),
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            // gap: 12,
            justifyContent: 'space-between',
            // paddingLeft: wp(2.5),
            // paddingRight: wp(2.5),
            // padding: wp(2.5)
            paddingHorizontal: wp(2.5),
            paddingVertical: wp(1.5)
        }}>
            <Image style={{width: wp(5)}} source={require('../../../assets/image/flag_tr.png')} resizeMode={"contain"} />
            <MyText text={"TR"} textStyle={{
                color: "#435474",
                fontSize: wp(3.5),
                fontWeight: 600,
            }}/>

            {
                    isRecording ?
                    ""
                    :
                    <MyIcon
                        iconName={"chevron-down"}
                        iconGroup={"FontAwesome"}
                        iconStyle={{
                            color: "#435474",
                            fontWeight: 500,
                            fontSize: wp(2.5)
                        }}/>
            }

        </View>
    )
}

export default SelectLanguage;
