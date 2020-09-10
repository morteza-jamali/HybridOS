import React from "react";
import { View } from "react-native";
import {
    Button ,
    SearchBar
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../style';

const MainScreen = ({ navigation }) => {
    return (
        <View style={Style.mainContainer}>
            <SearchBar placeholder="Type Here..." platform="android" containerStyle={Style.mainPageSearchBar_ContainerStyle} />
            <View style={Style.bottomNavigationView}>
                <Button buttonStyle={Style.bottomNavigationButtons}
                        icon={
                            <Icon
                                name="phone"
                                size={20}
                                color="white"
                            />
                        }
                />
                <Button buttonStyle={Style.bottomNavigationButtons}
                        icon={
                            <Icon
                                name="phone"
                                size={20}
                                color="white"
                            />
                        }
                />
                <Button buttonStyle={Style.bottomNavigationMainButton} onPress={() =>
                    navigation.navigate('Applications')}
                        icon={
                            <Icon
                                name="phone"
                                size={20}
                                color="white"
                            />
                        }
                />
                <Button buttonStyle={Style.bottomNavigationButtons}
                        icon={
                            <Icon
                                name="phone"
                                size={20}
                                color="white"
                            />
                        }
                />
                <Button buttonStyle={Style.bottomNavigationButtons}
                        icon={
                            <Icon
                                name="phone"
                                size={20}
                                color="white"
                            />
                        }
                />
            </View>
        </View>
    );
};

export default MainScreen;
