/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from "./src/rootRedux/appReducer";
import { Icon } from "./src/utils/iconFont/Icon";
import React from "react";
import {
  Alert,
  View
} from "react-native";

// const store = configureStore({reducer: appReducer});
function App() {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Icon name={'xianshimima'} onPress={()=>Alert.alert('123')}/>
    </View>
  )
  // return (
  //   <Provider store={store}>
  //
  //   </Provider>
  // )
}

export default App;
