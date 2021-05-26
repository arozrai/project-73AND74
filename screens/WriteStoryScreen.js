import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import {Header} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'

export default function WriteStoryScreen() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View>
            <KeyboardAvoidingView
                behaviour={Platform.OS === "android" ? "padding" : "height"}
            />
            <Header>
                
            </Header>
            <TextInput
                placeHolder="Title"
                style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                placeHolder="Author"
                style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TextInput
                placeHolder="Write story"
                style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                multiline={true}
            />
            <TouchableOpacity
            onPress={sumbitButton}
            >
                <Text>
                    Sumbit Story
                </Text>
            </TouchableOpacity>
        </View>
    );
  }

function sumbitButton(){
    const sumbittedStory = () => {
        ToastAndroid.sumbittedStory(
          "Story Sumbitted",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };
}