import React, {useContext, useEffect} from 'react';

import { navigationRef, isMountedRef } from '../../RootMethods/RootNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerMenu} from '../../components/DrawerMenu/DrawerMenu';
import {CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import {deviceWidth, platform} from '../../values/Constants/Constants';
import {LoginContext} from '../../contexts/LoginContext';
import {LoadingContext} from '../../contexts/LoadingContext';
import {DialogContext} from '../../contexts/DialogContext';
import {ToastContext} from "../../contexts/ToastContext";

{/** Screens - Start */}
import {NotLoginHomeScreen} from "../NotLogin/NotLoginHomeScreen";
import {HomeScreen} from "../Login/HomeScreen";
import {SettingsScreen} from "../Login/Settings/SettingsScreen";
import {ProfileScreen} from "../Login/Profile/ProfileScreen";
import {AuthHomeScreen} from "../Login/Auth/AuthHomeScreen";
import {ChangePasswordScreen} from "../Login/Profile/ChangePasswordScreen";
import {ChangeLanguageScreen} from "../Login/Settings/Language/ChangeLanguageScreen";
import {ChangeThemeScreen} from "../Login/Settings/Theme/ChangeThemeScreen";
import {LoginScreen} from "../Login/Auth/LoginScreen";
import {HandleNotification} from "../../helper/functions/Notification";
import {Notifications} from "../User/Notifications/Notifications";
{/** Screens - End */}


import messaging from "@react-native-firebase/messaging";


{/** Contexts - Start */}
import {ThemeContext} from "../../contexts/ThemeContext";
import {StringContext} from "../../contexts/StringContext";
import { PopupContext } from "../../contexts/PopupContext";
import {RegisterScreen} from "../Login/Auth/RegisterScreen";
import {Step1} from "../Starter/Step1";
import {Step2} from "../Starter/Step2";
import {Step3} from "../Starter/Step3";
{/** Contexts - End */}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const notAnimation = () => () => ({});

const StackScreens = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: platform === "ios" ? CardStyleInterpolators.forHorizontalIOS : CardStyleInterpolators.forRevealFromBottomAndroid
            }}
            initialRouteName="HomeScreen">
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            <Stack.Screen name={"SettingsScreen"} component={SettingsScreen} />
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
            <Stack.Screen name={"ChangePasswordScreen"} component={ChangePasswordScreen} />
            <Stack.Screen name={"ChangeLanguageScreen"} component={ChangeLanguageScreen} />
            <Stack.Screen name={"ChangeThemeScreen"} component={ChangeThemeScreen} />
        </Stack.Navigator>
    )
};

export const Router = (props) => {

    // required for navigating screens
    useEffect(() => {
        isMountedRef.current = true;

        return () => (isMountedRef.current = false);
    }, []);

    // firebase push notification
    useEffect(() => {
        // Register background handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log("router -> Message handled in the background!", remoteMessage);
            HandleNotification(remoteMessage);
        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log("router -> Notification caused app to open from background state");
            HandleNotification(remoteMessage);
        });

        // Check whether an initial notification is available
        messaging().getInitialNotification().then(remoteMessage => {
            if (remoteMessage) {
                console.log("router -> Notification caused app to open from quit state");
                HandleNotification(remoteMessage);
            }
        });
    }, [])

    let toastContext = useContext(ToastContext);

    let loadingContext = useContext(LoadingContext);

    let dialogContext = useContext(DialogContext);
    let popupContext = React.useContext(PopupContext);

    let stringContext = useContext(StringContext);

    let colorContext = useContext(ThemeContext);

    let loginContext = useContext(LoginContext);
    // to get user login status from login context
    let isLogin = loginContext.isLogin;

    global.__loadingContext = loadingContext;

    global.__loginContext = loginContext;

    global.__dialogContext = dialogContext;
    global.__popupContext = popupContext;

    global.__toastContext = toastContext;

    global.__stringContext = stringContext;

    global.__colorContext = colorContext;

    return (
        <NavigationContainer
            ref={navigationRef}>

            {
                (isLogin)

                    ?

                    <Drawer.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        drawerContent={(props) => <DrawerMenu {...props} />}
                        initialRouteName="">
                        <Drawer.Screen name={"AuthHomeScreen"} component={AuthHomeScreen} />
                        <Drawer.Screen name={"LoginScreen"} component={LoginScreen} />
                        <Drawer.Screen name={"RegisterScreen"} component={RegisterScreen} />
                    </Drawer.Navigator>

                    :

                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            cardStyleInterpolator: platform === "ios" ? CardStyleInterpolators.forHorizontalIOS : CardStyleInterpolators.forRevealFromBottomAndroid
                        }}
                        initialRouteName="Step1">
                        <Stack.Screen name={"Step1"} component={Step1}/>
                        <Stack.Screen name={"Step2"} component={Step2}/>
                        <Stack.Screen name={"Step3"} component={Step3}/>
                        <Stack.Screen name={"NotLoginHomeScreen"} component={NotLoginHomeScreen}/>
                        <Stack.Screen name={"NotificationsScreen"} component={Notifications} />
                    </Stack.Navigator>
            }

        </NavigationContainer>
    );
};
