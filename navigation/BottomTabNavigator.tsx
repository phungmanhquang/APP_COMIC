import { Ionicons, Entypo  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/Home';
import CategoriesScreen from '../screens/Categories'
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import LikedScreend from '../screens/LikedScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Trang chủ"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) =>  <Entypo name="home" size={24} color={color} />,
        }}
      />
     <BottomTab.Screen
        name="Phân loại"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="grid" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Yêu thích"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="heart" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cài đặt"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="cog" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Trang chủ' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={CategoriesScreen}
        options={{ headerTitle: 'Phân loại' }}
      />
    </TabTwoStack.Navigator>
  );
}
 
const TabThreeStack = createStackNavigator<TabOneParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabOneScreen"
        component={LikedScreend}
        options={{ headerTitle: 'Yêu thích' }}
      />
    </TabThreeStack.Navigator>
  );
}
