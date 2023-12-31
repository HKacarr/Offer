import React, {useContext, useEffect, useState} from "react";
import {Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {LoginContext} from "../../contexts/LoginContext";
import {ThemeContext} from "../../contexts/ThemeContext";
import {MyText} from "../../components/Common/Text/MyText";
import Header from "../../components/NoLoginHome/Header/Header";
import SideButton from "../../components/NoLoginHome/BottomButtons/SideButton";
import {navigate} from "../../RootMethods/RootNavigation";

export const NotLoginHomeScreen = (props) => {
    const loginContext = useContext(LoginContext);
    const {myColors} = useContext(ThemeContext);

    const [isRecording, setIsRecording] = useState(false);
    const [contentBgImage, setContentBgImage] = useState(require('../../assets/image/no-login-home-screen/content/circle-bg.png'))
    const [key, setKey] = useState(1);

    // let isLogin = loginContext.isLogin;
    let isLogin = false;

    function handleRecording()
    {
        setIsRecording(!isRecording);
        setContentBgImage(!isRecording ? null : require('../../assets/image/no-login-home-screen/content/circle-bg.png'));
        setKey(prevKey => prevKey + 1)
    }

    // sample login process for changing navigation container
    function _handleLogin() {
        // to let know the navigator user has login
        navigate("AuthHomeScreen");
        // loginContext.setLogin(false);
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor: myColors.pageBGColor}}>
            {/** Header - Start */}
            <View style={{
                height: hp(7),
                justifyContent: 'center',
                marginTop: wp(3),
                paddingHorizontal: wp(4.3)
            }}>
                    <Header
                        userLogoSource={"./assets/image/no-login-home-screen/header/frame.png"}
                        signInText={isLogin ? "User Name" : "Sign In"}
                        isRecording={isRecording}
                        handleRecording={handleRecording}
                        handleLogin={_handleLogin}
                    />
            </View>
            {/** Header - End */}



            {/** Content - Start */}
            <View style={{
                marginTop: wp(10),
                flex: 1,
                alignItems: 'center',
            }}>
                <ImageBackground
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: wp(100),
                        height: hp(81),
                        flex: 1,
                    }}
                    key={key}
                    resizeMode={"cover"}
                    source={contentBgImage}
                >
                    <MyText text={isRecording ? "I’m listening to you" : "Tell me something so I can create an offer"} textStyle={{
                        color: myColors.noLoginTitle,
                        fontSize: wp(8),
                        fontWeight: 700,
                        textAlign: 'center',
                        paddingHorizontal: wp(5),
                    }} />

                    {
                        isRecording ?
                            <View>
                                <MyText
                                    text={"00:01"}
                                    textStyle={{
                                        fontSize: wp(7.5),
                                        color: myColors.greyText,
                                        marginTop: wp(4),
                                        fontWeight: 500
                                    }}
                                />
                            </View>
                            :
                            ""
                    }


                    <Image
                        style={{
                            width: wp(100),
                            height: hp(100),
                            flex: 4.5,
                            marginLeft: wp(7.5)
                        }}
                        resizeMode={"center"}
                        source={isRecording ? require("../../assets/image/no-login-home-screen/content/recording-mic.png") : require("../../assets/image/no-login-home-screen/content/mic.png")}/>



                    {/** Record Buttons - Start */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        flex: 1,
                        marginBottom: wp(4)
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: wp(5)
                        }}>
                            <SideButton isRecording={isRecording} isLeft={true} />


                            {/** TODO MyButton ile yap */}
                            <TouchableOpacity onPress={handleRecording}>
                                <View style={{
                                    width: wp('17.5%'),
                                    height: wp('17.5%'),
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: myColors.offerPurple,
                                    backgroundColor: myColors.offerPurple,
                                    borderRadius: wp('10%'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: wp(6.5)
                                }}>
                                    {
                                        isRecording ?
                                            <Image
                                                style={{
                                                    width: wp(9),
                                                }}
                                                resizeMode={"contain"}
                                                source={require("../../assets/image/no-login-home-screen/content/pause.png")}/>
                                            :
                                            <Image
                                                style={{
                                                    width: wp(11),
                                                }}
                                                resizeMode={"contain"}
                                                source={require("../../assets/image/no-login-home-screen/content/record-btn-mic.png")}/>
                                    }
                                </View>
                            </TouchableOpacity>


                            <SideButton isRecording={isRecording} isLeft={false} />
                        </View>

                    </View>
                    {/** Record Buttons - End */}
                </ImageBackground>
            </View>
            {/** Content - End */}
        </SafeAreaView>



    );
}
