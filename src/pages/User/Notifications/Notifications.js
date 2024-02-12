import React, {useContext, useEffect, useState} from "react";
import {MyContainer} from "../../../components/Container/Container";
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {MyText} from "../../../components/Common/Text/MyText";
import Feather from "react-native-vector-icons/Feather";
import {MyListItemIcon} from "../../../components/ListItem/MyListItemIcon";
import {MyIcon} from "../../../components/Common/VectorIcon/MyIcon";
import {GoBackButton} from "../../../components/OfferCommon/GoBackButton";
import {CircleIcon} from "../../../components/OfferCommon/CircleIcon";
import {navigate} from "../../../RootMethods/RootNavigation";
import {IconText} from "../../../components/OfferCommon/IconText";
import {NotificationList} from "../../../components/Notifications/NotificationList";
import {TitleHeader} from "../../../components/OfferCommon/TitleHeader";

export const Notifications = () => {
    let {myColors} = useContext(ThemeContext);
    let [notifications, setNotifications] = useState([]);

    useEffect(() => {
        let allNotifications = [
            {
                "id": 1,
                "message": "Your offer “Pantone Offer” is ready!",
                "time": "2 hours ago",
                "isRead": false
            },
            {
                "id": 2,
                "message": "Your offer “Pantone Offer” is ready!",
                "time": "14.12.2023 * 10:30",
                "isRead": true
            },
            {
                "id": 3,
                "message": "Your offer “Pantone Offer” is ready!",
                "time": "14.12.2023 * 10:30",
                "isRead": true
            },
            {
                "id": 4,
                "message": "Your offer “Pantone Offer” is ready!",
                "time": "14.12.2023 * 10:30",
                "isRead": false
            },
            {
                "id": 5,
                "message": "Your offer “Pantone Offer” is ready!",
                "time": "14.12.2023 * 10:30",
                "isRead": true
            },
            {
                "id": 6,
                "message": "Your offer “Pantone Offer” is ready! “Pantone Offer” is ready!",
                "time": "14.12.2023 * 10:30",
                "isRead": false
            },
            {
                "id": 7,
                "message": "Your offer “Pantone Offer” is ready!",
                "time": "14.12.2023 * 10:30",
                "isRead": true
            }
        ]
        setNotifications(allNotifications);
    }, [1]);

    const goBack = () => {
        navigate("NotLoginHomeScreen")
    }

    const search = () => {

    }


    return (
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
            // statusBar={false}
        >
           <ScrollView>
               {/** Header - Start */}
               <TitleHeader
                   title={"Notifications"}
                   redirectUrl={"NotLoginHomeScreen"}
               />




               <View style={{
                   flexDirection: 'row',
                   marginTop: hp(5),
                   justifyContent: 'space-between',
               }}>
                   {/** Show Message Filter - Start */}
                   <IconText
                       leftIconName={"list"}
                       leftIconGroup={"Foundation"}
                       text={"All"}
                       isRightIcon={true}
                       rightIconName={"chevron-down"}
                       rightIconGroup={"FontAwesome"}
                   />
                   {/** Show Message Filter - End */}



                   {/** Mark All as Read - Start */}
                   <IconText
                       leftIconName={"checkcircleo"}
                       leftIconGroup={"AntDesign"}
                       text={"Mark All As Read"}
                       borderViewStyle={{
                           width: wp(41),
                       }}
                   />
                   {/** Mark All as Read - End */}
               </View>



               {/** Notifications - Start */}
               <NotificationList
                   notifications={notifications}
               />
               {/** Notifications - End */}
           </ScrollView>
        </MyContainer>
    )
}
