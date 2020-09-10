import React , { useState } from "react";
import { Button } from 'react-native-elements';
import {Image, ScrollView, Text, View} from 'react-native';
import RNAndroidInstalledApps from 'react-native-android-installed-apps-unblocking';
import Style from '../style';
import Icon from "react-native-vector-icons/FontAwesome";

const Btn = () => (
    <Button buttonStyle={Style.bottomNavigationButtons}
            icon={
                <Icon
                    name="phone"
                    size={20}
                    color="white"
                />
            }
    />
);

const AppScreen = ({navigation}) => {
    return(
        <>
            <ScrollView>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
                <Btn></Btn>
            </ScrollView>
            <View style={Style.bottomNavigationView}>
                <Button buttonStyle={Style.bottomNavigationMainButton} onPress={() =>
                    navigation.navigate('Main')}
                        icon={
                            <Icon
                                name="phone"
                                size={20}
                                color="white"
                            />
                        }
                />
            </View>
        </>
    );
};

export default AppScreen;
