import {BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabBar(){
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconSource;
              if (route.name === '首页') {
                iconSource = focused
                    ? require("../source/icon_h_sy.png")
                    : require("../source/icon_sy.png");
              } else if (route.name === '工作台') {
                iconSource = focused
                    ? require("../source/icon_h_gzt.png")
                    : require("../source/icon_gzt.png");
              } else if (route.name === '我的') {
                iconSource = focused
                    ? require("../source/icon_h_wd.png")
                    : require("../source/icon_wd.png");
              }
              return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
            },
            tabBarActiveTintColor: HBJColors.theme.primary,
            tabBarInactiveTintColor: HBJColors.text.light,
            lazy: false,
          })}>
        <Tab.Screen name={'首页'}
                    component={MainScreen}
        />
        <Tab.Screen name={'工作台'}
                    options={{headerShown: false}}
                    component={WorkbenchScreen}
        />

        <Tab.Screen name={'我的'}
                    component={ProfileScreen}
        />
      </Tab.Navigator>
  );
}
