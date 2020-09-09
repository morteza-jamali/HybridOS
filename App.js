import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import {
    Text ,
    View ,
    BackHandler
} from "react-native";
import {
    Button ,
    SearchBar
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Style from './resources/js/style';

const Stack = createStackNavigator();

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
const AppScreen = ({ navigation }) => {
    return(
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
    );
};

const App = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        function () {
          return true;
        }
    );

    return () => backHandler.remove();
  }, []);

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen
                  name="Applications"
                  component={AppScreen}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
