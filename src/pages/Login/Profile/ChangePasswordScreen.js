import React, {useState, useContext, useRef} from "react";
import {Keyboard, TouchableOpacity, View} from "react-native"
import {StringContext} from "../../../contexts/StringContext";
import {ShowToast} from "../../../helper/components/Toasts";
import {MyRequest} from "../../../adapter/api/MyRequest";
import {navigate} from "../../../RootMethods/RootNavigation";
import {MyContainer} from "../../../components/Container/Container";
import {MyButton} from "../../../components/Common/Button/MyButton";
import {UserInfoView} from "../../../components/Others/UserInfoView";
import { DialogType, ShowDialog } from "../../../helper/components/PopupDialogs";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Input} from "../../../components/Auth/Authorize/Input";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {CircleIcon} from "../../../components/OfferCommon/CircleIcon";
import {MyText} from "../../../components/Common/Text/MyText";

export const ChangePasswordScreen = (props) => {
    const {myStrings} = useContext(StringContext);
    const {myColors} = useContext(ThemeContext);

    const currentPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const newPasswordRepeatRef = useRef(null);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");

    function _changePasswordControl() {
        if (!currentPassword) {
            ShowToast.warning(myStrings.cannotBeNull.password);
        }
        else if (!newPassword) {
            ShowToast.warning(myStrings.cannotBeNull.newPassword);
        }
        else if (!newPasswordRepeat) {
            ShowToast.warning(myStrings.cannotBeNull.newPasswordRepeat);
        }
        else if (newPassword !== newPasswordRepeat) {
            ShowToast.error(myStrings.cannotBeNull.passwordNotMatch);
        }
        else {
            _changePasswordRequest();
        }
    }

    function _changePasswordRequest() {
        let passwordData = {
            oldPassword: currentPassword,
            newPassword: newPasswordRepeat,
        };

        MyRequest("Change Password", "changePasswordUrl", passwordData)
            .then((response) => {
                ShowDialog({
                    type: DialogType.success,
                    title: myStrings.appName,
                    message: response["message"]
                })
                .then(() => navigate("HomeScreen"))
            });
    }

    return(
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



            <Input
                inputLabel={"Current Password"}
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
                parentViewStyle={{
                    marginTop: wp(8)
                }}
            />



            <Input
                inputLabel={"New Password"}
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
                parentViewStyle={{
                    marginTop: wp(5)
                }}
            />



            <Input
                inputLabel={"New Password Repeat"}
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
                parentViewStyle={{
                    marginTop: wp(5)
                }}
            />



            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp(20)
                }}
            >
                <TouchableOpacity
                    onPress={() => alert("Unuttum ne var!!!!")}
                >
                    {/** Bu yazı bence butonun altında olmalı. */}
                    <MyText
                        text={"Did you forget your password?"}
                        textStyle={{
                            color: myColors.greyText,
                            fontSize: wp(3)
                        }}
                    />
                </TouchableOpacity>
            </View>




            <View style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                paddingBottom: hp(4)
            }}>
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



            {/*<View*/}
            {/*    style={{marginBottom: 20}}>*/}



                {/* current password input */}
                {/*<UserInfoView*/}
                {/*    inputRef={currentPasswordRef}*/}
                {/*    onSubmitEditing={() => newPasswordRef.current.focus()}*/}
                {/*    value={currentPassword}*/}
                {/*    secureTextEntry={true}*/}
                {/*    returnKeyType={"next"}*/}
                {/*    title={myStrings.currentPassword}*/}
                {/*    maxLength={20}*/}
                {/*    onChangeText={setCurrentPassword}/>*/}

                {/*/!* new password input *!/*/}
                {/*<UserInfoView*/}
                {/*    inputRef={newPasswordRef}*/}
                {/*    onSubmitEditing={() => newPasswordRepeatRef.current.focus()}*/}
                {/*    value={newPassword}*/}
                {/*    secureTextEntry={true}*/}
                {/*    returnKeyType={"next"}*/}
                {/*    title={myStrings.newPassword}*/}
                {/*    maxLength={20}*/}
                {/*    onChangeText={setNewPassword}/>*/}

                {/*/!* new password repeat input *!/*/}
                {/*<UserInfoView*/}
                {/*    inputRef={newPasswordRepeatRef}*/}
                {/*    onSubmitEditing={() => {*/}
                {/*        Keyboard.dismiss();*/}
                {/*        _changePasswordControl();*/}
                {/*    }}*/}
                {/*    value={newPasswordRepeat}*/}
                {/*    secureTextEntry={true}*/}
                {/*    title={myStrings.newPasswordRepeat}*/}
                {/*    maxLength={20}*/}
                {/*    onChangeText={setNewPasswordRepeat}/>*/}

            {/*</View>*/}

            {/*<MyButton*/}
            {/*    buttonText={myStrings.changePassword}*/}
            {/*    onPress={() => _changePasswordControl()}*/}
            {/*    filled={true}*/}
            {/*    type={"success"}/>*/}

        </MyContainer>
    );
}
