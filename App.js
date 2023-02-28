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
import AdminPayrollScreen from "./screens/AdminPayrollScreen";
import AgentScheduleScreen from "./screens/user/AgentScheduleScreen";
import Welcome from "./screens/Welcome";
import Savoir from "./screens/Savoir";
import Payroll from "./screens/user/Payroll";
import Mates from "./screens/user/Mates";
import Interchange from "./screens/user/Interchange";
import Stillempty from "./screens/Stillempty";
import Transport from "./screens/Transport";
import Pickup from "./screens/Pickup";
import Rideto from "./screens/Rideto";

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

      ><Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="Rideto" component={Rideto} /> 
        <Stack.Screen name="Pickup" component={Pickup} /> 
        
        <Stack.Screen name="Transport" component={Transport} /> 
        
        
        <Stack.Screen name="User" component={User} />         
        <Stack.Screen name="login" component={login} />  
        <Stack.Screen name="Mates" component={Mates} />
        <Stack.Screen name="Stillempty" component={Stillempty} /> 
        <Stack.Screen name="Interchange" component={Interchange} />       
        <Stack.Screen name="Payroll" component={Payroll} />
        <Stack.Screen name="Savoir" component={Savoir} />       
         <Stack.Screen name="AgentScheduleScreen" component={AgentScheduleScreen} />        
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="Manager" component={Manager} />                 
        <Stack.Screen name="AdminPayrollScreen" component={AdminPayrollScreen} />       
        <Stack.Screen name="news" component={news} />      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;