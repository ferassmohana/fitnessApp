import React from "react";
import { Text, View,StatusBar } from "react-native";
import Screens from "./navigation";
export default function App() {
    return (
        <View style={{ flex: 1 }}>

            <StatusBar
            backgroundColor={'transparent'}
            barStyle={'light-content'}
            translucent={true}
            />
        <Screens />

        </View>
    )

}