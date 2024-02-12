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
    let steps = [
        "step_1",
        "step_2",
        "step_3"
    ];


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
            {/** Step Show - Start */}
            <View style={{
                flexDirection: 'row',
                width: '100%',
                gap: wp(5),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: wp(5)
            }}>

                {
                    steps.map(step => {
                        return (
                            <View key={step} style={{
                                flexDirection: 'row',
                                backgroundColor: step == activeStep ? myColors.offerPurple : myColors.softGrey,
                                width: wp(20),
                                height: 2,
                            }} />
                        )
                    })
                }
            </View>
            {/** Step Show - End */}




            {/** Title - Start */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: wp(8)
            }}>
                <MyText
                    text={stepTitle}
                    textStyle={{
                        fontSize: wp(8),
                        fontWeight: 700,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: myColors.noLoginTitle
                    }}
                />
            </View>
            {/** Title - End */}




            {/** Image - Start */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginTop: wp(12)
            }}>
                <Image
                    source={activeStepImage}
                    resizeMode={"contain"}
                    style={{
                        width: wp(80)
                    }}
                />
            </View>
            {/** Image - End */}




            {/** Button - Start */}
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
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
            {/** Button - End */}

        </SafeAreaView>
    )
}

Step.defaultProps = {
    isLastStep: false,
    buttonText: "Next"
}
