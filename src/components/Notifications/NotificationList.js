import React, {useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";
import {TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {MyIcon} from "../Common/VectorIcon/MyIcon";
import {MyText} from "../Common/Text/MyText";

export const NotificationList = (props) => {
    let {myColors} = useContext(ThemeContext);
    let {notifications} = props;
    return (
        <View>
            {
                notifications.map(notification => {
                    return (
                        <TouchableOpacity key={notification.id} style={{
                            marginTop: hp(3),
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: myColors.darkWhite,
                            flexDirection: 'row',
                            gap: wp(4),
                            justifyContent: 'space-between',
                            padding: wp(3),
                            borderRadius: wp(4 )
                        }}>
                            {/** Bell Icon - Start */}
                            <View style={{
                                width: wp('11.5%'),
                                height: wp('11.5%'),
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: notification.isRead ? myColors.darkWhite : myColors.offerPurple,
                                backgroundColor: notification.isRead ? myColors.pageBGColor : myColors.offerPurple,
                                borderRadius: wp('10%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: wp(2)
                            }}>
                                <MyIcon
                                    iconName={"bell"}
                                    iconGroup={"FontAwesome"}
                                    iconStyle={{
                                        color: notification.isRead ? myColors.greyText : myColors.pageBGColor,
                                        fontSize: wp(6.3)
                                    }}/>
                            </View>
                            {/** Bell Icon - End */}



                            {/** Notification Message & Time - Start */}
                            <View style={{
                                flexDirection: "column",
                                justifyContent: 'center',
                                rowGap: hp(.5)
                            }}>
                                <View>
                                    <MyText
                                        text={notification.message.substring(0, 30) + "..."}
                                        textStyle={{
                                            fontSize: wp(4 ),
                                            fontWeight: 600,
                                            color: myColors.greyText2
                                        }}
                                    />
                                </View>

                                <View>
                                    <MyText
                                        text={notification.time}
                                        textStyle={{
                                            fontSize: wp(3.4),
                                            fontWeight: 500,
                                            color: myColors.greyText
                                        }}
                                    />
                                </View>
                            </View>
                            {/** Notification Message & Time - End */}



                            {/** Right Arrow Icon - Start */}
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: wp(2),
                            }}>
                                <MyIcon
                                    iconName={"chevron-thin-right"}
                                    iconGroup={"Entypo"}
                                    iconStyle={{
                                        color: myColors.greyText2,
                                        fontSize: wp(4)
                                    }}/>
                            </View>
                            {/** Right Arrow Icon - End */}
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
