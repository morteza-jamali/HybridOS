import React, { useEffect } from "react";
import { Text, View, BackHandler } from "react-native";
import Terminal from './src/Terminal';

Terminal.runCommand('pwd');

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
      <View>
        <Text>Click Back button!</Text>
      </View>
  );
};

export default App;
