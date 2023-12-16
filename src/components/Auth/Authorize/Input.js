import React, {Component, useContext, useState} from 'react';
import {View} from "react-native";
import {MyText} from "../../Common/Text/MyText";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyInput} from "../../Common/Input/MyInput";
import {ThemeContext} from "../../../contexts/ThemeContext";

export const Input = (props) => {
    let {inputLabel, inputLabelStyle, placeholder, containerStyle, textInputStyle, rightIcon, secureTextEntry} = props;
    let [inputVal, setInputVal] = useState("");

    return (
        <View>
            <View>
                <MyText
                    text={inputLabel}
                    textStyle={inputLabelStyle}
                />
            </View>


            <MyInput
                onChangeText={value => setInputVal(value)}
                value={inputVal}
                secureTextEntry={secureTextEntry}
                keyboardType={"email-address"}
                placeHolderTextColor={"green"}
                placeholder={placeholder}
                rightIcon={rightIcon}
                containerStyle={containerStyle}
                textInputStyle={textInputStyle}
            />
        </View>
    )
}
