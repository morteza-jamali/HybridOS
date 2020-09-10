import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./resources/js/component/Main";
import AppScreen from "./resources/js/component/Applications";

const Stack = createStackNavigator();

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
