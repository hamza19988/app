import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";
import login from "./screens/login";
import news from "./screens/news";
import AdminScreen from "./screens/AdminScreen";
import Manager from "./screens/Manager";
import User from "./screens/User";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      
      >
        <Stack.Screen name="Manager" component={Manager} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
         <Stack.Screen name="User" component={User} />
        
        <Stack.Screen name="news" component={news} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;