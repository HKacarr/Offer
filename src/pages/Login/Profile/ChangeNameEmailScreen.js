import React, {useContext} from 'react'
import {MyContainer} from "../../../components/Container/Container";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {CircleIcon} from "../../../components/OfferCommon/CircleIcon";
import {View} from "react-native";
import {MyText} from "../../../components/Common/Text/MyText";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {navigate} from "../../../RootMethods/RootNavigation";
import {Input} from "../../../components/Auth/Authorize/Input";
import {MyButton} from "../../../components/Common/Button/MyButton";

export const ChangeNameEmailScreen = (props) => {
    let {myColors} = useContext(ThemeContext)
    return (
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
        >
            <View style={{
                flexDirection: 'row',
            }}>
                {/** Go Back - Start */}
                <View style={{
                    width: wp(12),
                }}>
                    <CircleIcon
                        pressFunction={() => navigate("ProfileScreen")}
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
                        text={"Profile"}
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


            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(3)
            }}>
                <CircleIcon
                    pressFunction={() => alert(1)}
                    iconName={"user"}
                    iconGroup={"Entypo"}
                    iconColor={myColors.greyText2}
                    iconStyle={{
                        fontSize: hp("7%"),
                        color: myColors.pageBGColor,
                    }}
                    frameStyle={{
                        width: wp(25),
                        height: wp(25),
                        alignItems: "center",
                        // justifyContent: "flex-end",
                        backgroundColor: myColors.offerPurple
                    }}
                />

                <View style={{
                    backgroundColor: myColors.pageBGColor,
                    padding: wp(1),
                    position: 'absolute',
                    borderRadius: wp(50),
                    top: wp(16),
                    right: wp(34)
                }}>
                    <CircleIcon
                        pressFunction={() => alert(1)}
                        iconName={"lead-pencil"}
                        iconGroup={"MaterialCommunityIcons"}
                        iconColor={myColors.greyText2}
                        iconStyle={{
                            fontSize: hp("3%"),
                            color: myColors.pageBGColor,
                        }}
                        frameStyle={{
                            width: wp(10),
                            height: wp(10),
                            alignItems: "center",
                            // justifyContent: "flex-end",
                            backgroundColor: myColors.greyText2
                        }}
                    />
                </View>
            </View>


            <View style={{
                marginTop: wp(5)
            }}>
                <Input
                    inputLabel={"Full Name"}
                    inputLabelStyle={{
                        color: myColors.greyText2,
                        fontWeight: 500,
                        fontSize: wp(4)
                    }}
                    placeholder={"Full Name "}
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
                    parentViewStyle={{
                        marginTop: wp(5)
                    }}
                />
            </View>



            <View>
                <MyButton
                    onPress={() => alert("Save")}
                    buttonText={"Save"}
                    containerStyle={{
                        backgroundColor: myColors.offerPurple,
                        marginTop: wp(8),
                        borderRadius: wp(3),
                        height: wp(11)
                    }}
                    textStyle={{
                        fontSize: wp(4.5),
                    }}
                />
            </View>
        </MyContainer>
    )
}
