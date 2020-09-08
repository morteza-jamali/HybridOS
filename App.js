import React, { useEffect } from "react";
import { Text, View, BackHandler } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={{
          flex: 1 ,
          flexDirection: 'row' ,
          position: 'absolute' ,
          bottom: 0 ,
          right: 0 ,
          left: 0 ,
          backgroundColor: 'blue'
      }}>
          <View style={{
              flex: 1 ,
              flexDirection: 'row' ,
              justifyContent: 'space-around' ,
              paddingTop: 23
          }}>
              <Button
                  buttonStyle={{
                      width: 50 ,
                      height: 50 ,
                      borderRadius: 50 ,
                      backgroundColor: 'orange'
                  }}
                  icon={
                      <Icon
                          name="phone"
                          size={20}
                          color="white"
                      />
                  }
              />
              <Button
                  buttonStyle={{
                      width: 50 ,
                      height: 50 ,
                      borderRadius: 50 ,
                      backgroundColor: 'orange'
                  }}
                  icon={
                      <Icon
                          name="phone"
                          size={20}
                          color="white"
                      />
                  }
              />
          </View>
          <View style={{
              justifyContent: 'space-around'
          }}>
              <Button
                  buttonStyle={{
                      width: 60 ,
                      height: 60 ,
                      borderRadius: 50 ,
                      backgroundColor: 'green' ,
                      marginBottom: 23
                  }}
                  icon={
                      <Icon
                          name="phone"
                          size={20}
                          color="white"
                      />
                  }
              />
          </View>
          <View style={{
              flex: 1 ,
              flexDirection: 'row' ,
              justifyContent: 'space-around' ,
              paddingTop: 23
          }}>
              <Button
                  buttonStyle={{
                      width: 50 ,
                      height: 50 ,
                      borderRadius: 50 ,
                      backgroundColor: 'red'
                  }}
                  icon={
                      <Icon
                          name="phone"
                          size={20}
                          color="white"
                      />
                  }
              />
              <Button
                  buttonStyle={{
                      width: 50 ,
                      height: 50 ,
                      borderRadius: 50 ,
                      backgroundColor: 'red'
                  }}
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

export default App;
