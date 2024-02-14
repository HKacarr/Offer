import React, {useContext, useEffect, useState} from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {MyRequest} from "../../adapter/api/MyRequest";
const audioRecorderPlayer = new AudioRecorderPlayer();


export const CreatePage = (props) => {
    let {recordedAudioUrl} = props.route.params;

    useEffect(() => {
        console.log("Audio Url : ", recordedAudioUrl);
    }, []);


    let playAudio = async () => {
        // MyRequest("Create Offer", "https://kacar.onremote.ch/en/sandbox/ai-assistant/service-try", {recordedAudioUrl: "Hasan Kacar"}, true, "Loading", "post")
        //     .then((response) => {
        //         // ShowDialog({
        //         //     type: DialogType.success,
        //         //     title: myStrings.appName,
        //         //     message: response["message"]
        //         // })
        //         //     .then(() => navigate("HomeScreen"))
        //         console.log("Response", response);
        //     }).catch((err) => {
        //     console.log("Error:", err);
        // });




        await audioRecorderPlayer.startPlayer();
        audioRecorderPlayer.addPlayBackListener((e) => {
            console.log("Event : ", e);
            return;
        })
        console.log("Result", result);
    }

    return (
        <SafeAreaView style={{flex:1, flexDirection: 'column'}}>
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={playAudio}>
                    <Text>
                        Listen
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
