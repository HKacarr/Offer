import React, {useEffect, useState, useContext, useRef} from "react";
import {MyContainer} from "../../../components/Container/Container";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {StringContext} from "../../../contexts/StringContext";
import {UserInfoView} from "../../../components/Others/UserInfoView";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {View, Image} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {CircleIcon} from "../../../components/OfferCommon/CircleIcon";
import {navigate} from "../../../RootMethods/RootNavigation";
import {MyText} from "../../../components/Common/Text/MyText";
import {IconText} from "../../../components/OfferCommon/IconText";
import {ImageText} from "../../../components/OfferCommon/ImageText";

export const ProfileScreen = (props) => {
    const {myColors} = useContext(ThemeContext);
    const {myStrings} = useContext(StringContext);

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);

    const [name, setName] = useState("Name");
    const [surname, setSurname] = useState("Surname");
    const [birthday, setBirthday] = useState("01.01.1900");
    const [phoneNumber, setPhoneNumber] = useState("XXX-XXX-XX-XX");
    const [email, setEmail] = useState("test@test.com");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const inputStyle = {
        container: {
            backgroundColor: myColors.darkViewBGColor,
            borderBottomWidth: 0,
            borderWidth: 0,
        }
    }

    useEffect(() => {
        _getProfileInfo();
    }, [])

    function _getProfileInfo() {
        // setIsLoading(true);
        setError(false);

        setIsLoading(false);
    }

    return(
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
            // errorMessage={errorMessage}
            // error={error}
            // errorOnPress={() => {_getProfileInfo()}}
            // footerActiveIndex={1}
            // title={"Profile"}
        >

            {
                !isLoading &&



                <KeyboardAwareScrollView>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        {/** Go Back - Start */}
                        <View style={{
                            width: wp(12),
                        }}>
                            <CircleIcon
                                pressFunction={() => navigate("NotLoginHomeScreen")}
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





                    {/** User Informations - Start */}
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


                        <View>
                            <MyText
                                text={"Hasan Kacar"}
                                textStyle={{
                                    color: myColors.greyText2,
                                    marginTop: wp(4),
                                    fontSize: wp(6),
                                    fontWeight: 700
                                }}
                            />
                        </View>

                        <View>
                            <MyText
                                text={"hasan.kacar@onremote.ch"}
                                textStyle={{
                                    color: myColors.greyText,
                                    marginTop: wp(1),
                                    fontSize: wp(4),
                                    fontWeight: 500
                                }}
                            />
                        </View>
                    </View>
                    {/** User Informations - End */}




                    {/** Profile Set - Start */}
                    <View style={{
                        marginTop: hp(3)
                    }}>
                        <MyText
                            text={"Profile"}
                            textStyle={{
                                color: myColors.greyText2,
                                fontWeight: 700,
                                fontSize: wp(4)
                            }}
                        />


                        <View style={{
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: myColors.darkWhite,
                            // padding: wp(1),
                            alignItems: 'center',
                            borderRadius: wp(5),
                            marginTop: wp(5)
                        }}>
                            <ImageText
                                text={"Profile"}
                                imageAlias={"user"}
                            />


                            <ImageText
                                text={"Password"}
                                imageAlias={"password"}
                                isLastItem={true}
                            />

                        </View>
                    </View>
                    {/** Profile Set - End */}




                    {/** Settings - Start */}
                    <View style={{
                        marginTop: hp(4)
                    }}>
                        <MyText
                            text={"Settings"}
                            textStyle={{
                                color: myColors.greyText2,
                                fontWeight: 700,
                                fontSize: wp(4)
                            }}
                        />


                        <View style={{
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: myColors.darkWhite,
                            // padding: wp(1),
                            alignItems: 'center',
                            borderRadius: wp(5),
                            marginTop: wp(5)
                        }}>
                            <ImageText
                                text={"Notification"}
                                imageAlias={"notification"}
                            />



                            <ImageText
                                text={"Privacy Policy"}
                                imageAlias={"privacy_policy"}
                            />



                            <ImageText
                                text={"Terms of Use"}
                                imageAlias={"terms_of_user"}
                                isLastItem={true}
                            />

                        </View>
                    </View>
                    {/** Settings - End */}



                    {/** Logout - Start */}
                    <View>
                        <View style={{
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: myColors.darkWhite,
                            alignItems: 'center',
                            borderRadius: wp(5),
                            marginTop: wp(4)
                        }}>
                            <ImageText
                                text={"Logout"}
                                imageAlias={"logout"}
                                isLastItem={true}
                                textStyle={{
                                    color: myColors.logoutRed,
                                    fontWeight: 500,
                                    fontSize: wp(4)
                                }}
                            />
                        </View>
                    </View>
                    {/** Logout - End */}




                    {/*/!* name input *!/*/}
                    {/*<UserInfoView*/}
                    {/*    inputRef={nameRef}*/}
                    {/*    icon={"user"}*/}
                    {/*    value={name}*/}
                    {/*    title={myStrings.title.name}*/}
                    {/*    textControl={true}*/}
                    {/*    returnKeyType={"next"}*/}
                    {/*    maxLength={20}*/}
                    {/*    containerStyle={inputStyle.container}*/}
                    {/*    onSubmitEditing={() => surnameRef.current.focus()}*/}
                    {/*    onChangeText={setName}/>*/}

                    {/*/!* surname input *!/*/}
                    {/*<UserInfoView*/}
                    {/*    inputRef={surnameRef}*/}
                    {/*    icon={"user"}*/}
                    {/*    value={surname}*/}
                    {/*    title={myStrings.title.surname}*/}
                    {/*    textControl={true}*/}
                    {/*    returnKeyType={"next"}*/}
                    {/*    maxLength={20}*/}
                    {/*    containerStyle={inputStyle.container}*/}
                    {/*    onSubmitEditing={() => emailRef.current.focus()}*/}
                    {/*    onChangeText={setSurname}/>*/}

                    {/*/!* email input *!/*/}
                    {/*<UserInfoView*/}
                    {/*    inputRef={emailRef}*/}
                    {/*    icon={"envelope"}*/}
                    {/*    value={email}*/}
                    {/*    title={myStrings.title.email}*/}
                    {/*    keyboardType={"email-address"}*/}
                    {/*    containerStyle={inputStyle.container}*/}
                    {/*    onChangeText={setEmail}/>*/}

                    {/*/!* phoneNumber input *!/*/}
                    {/*<UserInfoView*/}
                    {/*    inputRef={phoneNumberRef}*/}
                    {/*    icon={"phone"}*/}
                    {/*    value={phoneNumber}*/}
                    {/*    title={myStrings.title.phone}*/}
                    {/*    maxLength={10}*/}
                    {/*    keyboardType={"number-pad"}*/}
                    {/*    containerStyle={inputStyle.container}*/}
                    {/*    onChangeText={setPhoneNumber}/>*/}

                    {/*<UserInfoView*/}
                    {/*    icon={"calendar"}*/}
                    {/*    value={birthday}*/}
                    {/*    isDatePicker={true}*/}
                    {/*    onChangeText={setBirthday}*/}
                    {/*    title={myStrings.title.birthday}/>*/}

                </KeyboardAwareScrollView>
            }

        </MyContainer>
    )
}
