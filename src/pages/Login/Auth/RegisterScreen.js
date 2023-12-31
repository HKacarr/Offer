import React, {Component, useContext, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {WelcomeLoginTitle} from "../../../components/OfferCommon/WelcomeLoginTitle";
import {ThemeContext} from "../../../contexts/ThemeContext";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {MyContainer} from "../../../components/Container/Container";
import {navigate} from "../../../RootMethods/RootNavigation";
import {MyText} from "../../../components/Common/Text/MyText";
import NoAccountYet from "../../../components/Auth/Home/NoAccountYet";
import {MyInput} from "../../../components/Common/Input/MyInput";
import {Input} from "../../../components/Auth/Authorize/Input";
import {MyButton} from "../../../components/Common/Button/MyButton";
import {colorAlias} from "../../../values/Colors/Colors";
import {SocialLogin} from "../../../components/Auth/Authorize/SocialLogin";
import {CircleIcon} from "../../../components/OfferCommon/CircleIcon";

export const RegisterScreen = () => {
    let {myColors} = useContext(ThemeContext)
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const goBack = () => {
        navigate("AuthHomeScreen")
    }

    return (
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
            // statusBar={false}
        >
            <SafeAreaView style={{flex:1}}>
                {/** Go Back - Start */}
                <View>
                    <CircleIcon
                        iconName={"arrow-left"}
                        iconGroup={"SimpleLineIcons"}
                        iconstyle={{
                            color: myColors.greyText2,
                            fontSize: hp("2.2%")
                        }}
                        pressFunction={() => goBack()}
                    />
                </View>
                {/** Go Back - End */}



                {/** Welcome Text - Start */}
                <View style={{
                    marginTop: wp(4)
                }}>
                    <WelcomeLoginTitle
                        textContent={"Welcome"}
                        textStyle={{
                            color: myColors.noLoginTitle,
                            marginRight: 3,
                            fontWeight: 500,
                            fontSize: wp(4.5),
                        }} />
                </View>
                {/** Welcome Text - End */}




                {/** Sign In Text - Start */}
                <View style={{
                    marginTop: wp(2)
                }}>
                    <MyText
                        text={"Sign Up"}
                        textStyle={{
                            fontSize: wp(11),
                            fontWeight: 600,
                            color: myColors.noLoginTitle
                        }}
                    />
                </View>
                {/** Sign In Text - End */}




                {/** Inputs - Start */}
                <View style={{
                    marginTop: wp(8)
                }}>
                    <View>
                        <Input
                            inputLabel={"E-Mail"}
                            inputLabelStyle={{
                                color: myColors.greyText2,
                                fontWeight: 500,
                                fontSize: wp(4)
                            }}
                            placeholder={"E-Mail"}
                            containerStyle={{
                                borderWidth: wp(0.1),
                                borderBottomWidth: wp(0.1),
                                borderColor: myColors.noLoginTitle,
                                borderBottomColor: myColors.noLoginTitle,
                                paddingHorizontal: wp(3),
                                // paddingVertical: wp(3),
                                height: hp(7),
                                borderRadius: wp(3),
                                marginTop: wp(2.5)
                            }}
                            textInputStyle={{
                                color: myColors.noLoginTitle
                            }}
                            secureTextEntry={false}
                            rightIcon={null}
                        />
                    </View>


                    <View style={{marginTop: wp(7)}}>
                        <Input
                            inputLabel={"Password"}
                            inputLabelStyle={{
                                color: myColors.greyText2,
                                fontWeight: 500,
                                fontSize: wp(4)
                            }}
                            placeholder={"Password"}
                            containerStyle={{
                                borderWidth: wp(0.1),
                                borderBottomWidth: wp(0.1),
                                borderColor: myColors.noLoginTitle,
                                borderBottomColor: myColors.noLoginTitle,
                                paddingHorizontal: wp(3),
                                // paddingVertical: wp(3),
                                height: hp(7),
                                borderRadius: wp(3),
                                marginTop: wp(2.5),
                            }}
                            textInputStyle={{
                                color: myColors.noLoginTitle
                            }}
                            secureTextEntry={true}
                            rightIcon={"eye"}
                        />
                    </View>

                </View>
                {/** Inputs - End */}



                {/** Submit Button - Start */}
                <MyButton
                    onPress={() => alert("Sign Up")}
                    buttonText={"Sign Up"}
                    containerStyle={{
                        backgroundColor: myColors.offerPurple,
                        marginTop: wp(8),
                        borderRadius: wp(3),
                        height: hp(6.5)
                    }}
                    textStyle={{
                        fontSize: wp(5),
                    }}
                />
                {/** Submit Button - End */}



                {/** Bottom of the Form - Start */}
                <View style={{
                    // backgroundColor: 'yellow',
                    flex: 1,
                    alignItems: 'center',
                }}>
                    {/** Or Text - Start */}
                    <View style={{
                        height: hp(9),
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                        <MyText
                            text={"OR"}
                            textStyle={{
                                fontSize: wp(4.3),
                                fontWeight: 500,
                                color: myColors.greyText
                            }}
                        />
                    </View>
                    {/** Or Text - End */}


                    <View style={{
                        flex: 1,
                    }}>
                        {/** Social Login - Start */}
                        <View style={{
                            flexDirection: 'row',
                            height: hp(8),
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: wp(9),
                        }}>
                            <SocialLogin />
                        </View>
                        {/** Social Login - End */}



                        {/** Create Account - Start */}
                        <View style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            marginTop: wp(3),
                            flex: 1
                        }}>
                            <NoAccountYet
                                firstText={"I have already account"}
                                firstTextStyle={{
                                    color: myColors.greyText2,
                                    fontWeight: 500,
                                    fontSize: wp(3.7)
                                }}
                                linkText={"Sign In"}
                                linkTextStyle={{
                                    color: myColors.offerPurple,
                                    fontWeight: 700,
                                    lineHeight: hp(2.1),
                                    fontSize: wp(3.7),
                                    textDecorationLine: 'underline',
                                }}
                                navigateScreen={"LoginScreen"}
                            />
                        </View>
                        {/** Create Account - End */}
                    </View>
                </View>
                {/** Bottom of the Form - End */}
            </SafeAreaView>
        </MyContainer>
    )
}
