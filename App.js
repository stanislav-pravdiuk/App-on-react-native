import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScrin from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen.jsx'
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import ButtonLogOut from './src/components/buttons/ButtonLogOut';

const MainStack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          options={{
            headerShown: false,
          }}
        >{() => <RegistrationScreen />}
        </MainStack.Screen>
        <MainStack.Screen
          name="LoginScrin"
          options={{
            headerShown: false,
          }}
        >{() => <LoginScrin />}
        </MainStack.Screen>
        <MainStack.Screen
          name="Home"
          options={{
            title: "Публікації",
            headerRight: () => <ButtonLogOut />,
            headerTitleStyle: {
            fontWeight: '500',
            fontSize: 17,
            color: '#212121',
            },
            headerTitleAlign: 'center',
            headerRightContainerStyle: {
              marginRight: 10,
            },
            headerStyle: {
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 0.5,
            },
            headerLeft: null,
          }}
          >{() => <PostsScreen/>}
          </MainStack.Screen>
        <MainStack.Screen
          name="CreatePostsScreen"
        >{() => <CreatePostsScreen />}
        </MainStack.Screen>
        <MainStack.Screen
          name="CommentsScreen"
        >{() => <CommentsScreen />}
        </MainStack.Screen>
        <MainStack.Screen
          name="ProfileScreen">
          {() => <ProfileScreen />}
        </MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
