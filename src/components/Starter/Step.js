import React, {useContext, useState} from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Image, SafeAreaView, View} from "react-native";
import {MyText} from "../Common/Text/MyText";
import {MyButton} from "../Common/Button/MyButton";
import {ThemeContext} from "../../contexts/ThemeContext";
import {navigate} from "../../RootMethods/RootNavigation";

export const Step = (props) => {

    let {activeStep, stepTitle, isLastStep, buttonText} = props;
    let {myColors} = useContext(ThemeContext);
    let activeStepImage = null;

    if (activeStep == "step_1"){
        activeStepImage = require("../../assets/image/starter/dont-waste-time-with-paperwork.png");
    }else if (activeStep == "step_2"){
        activeStepImage = require("../../assets/image/starter/create-your-voice-recording.png");
    }else if (activeStep == "step_3"){
        activeStepImage = require("../../assets/image/starter/how-your-offer-ready.png");
    }


    const btnAction = () => {
        if (isLastStep){
            navigate("NotLoginHomeScreen")
        }else{
            if (activeStep == "step_1"){
                navigate("Step2")
            }else if(activeStep == "step_2"){
                navigate("Step3")
            }
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                gap: wp(5),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: wp(5)
            }}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: activeStep == "step_1" ? myColors.offerPurple : myColors.softGrey,
                    width: wp(20),
                    height: 2,
                }} />


                <View style={{
                    flexDirection: 'row',
                    backgroundColor: activeStep == "step_2" ? myColors.offerPurple : myColors.softGrey,
                    width: wp(20),
                    height: 2
                }} />



                <View style={{
                    flexDirection: 'row',
                    backgroundColor: activeStep == "step_3" ? myColors.offerPurple : myColors.softGrey,
                    width: wp(20),
                    height: 2
                }} />
            </View>


            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <MyText
                    text={stepTitle}
                    textStyle={{
                        fontSize: wp(9.2),
                        fontWeight: 700,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: myColors.noLoginTitle
                    }}
                />
            </View>



            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'blue'
            }}>
                <Image
                    source={activeStepImage}
                    resizeMode={"contain"}
                    style={{
                        width: wp(80)
                    }}
                />
            </View>



            <View style={{
                flex: wp(0.14),
                // backgroundColor: 'yellow',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: wp(8)
            }}>
                <MyButton
                    onPress={btnAction}
                    buttonText={buttonText}
                    containerStyle={{
                        backgroundColor: myColors.offerPurple,
                        marginTop: wp(8),
                        borderRadius: wp(3),
                        height: hp(5.5),
                        width: wp(70)
                    }}
                    textStyle={{
                        fontSize: wp(4),
                    }}
                />
            </View>

        </SafeAreaView>
    )
}

Step.defaultProps = {
    isLastStep: false,
    buttonText: "Next"
}
