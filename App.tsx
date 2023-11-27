/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from "./src/rootRedux/appReducer";

const store = configureStore({reducer: appReducer});
function App() {

  return (
    <Provider store={store}>

    </Provider>
  )
}

export default App;
