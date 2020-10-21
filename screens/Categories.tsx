import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListItemByCategoryComponent from '../components/ListItemByCategory';
// import { NavigationContainer } from '@react-navigation/native';


function HomeA(){
  return <Text>HomeA</Text>
}

const Tab = createMaterialTopTabNavigator();

export default function CategoriesScreen() {
  return (
    // <NavigationContainer>
     <Tab.Navigator
      tabBarOptions={{
        scrollEnabled : true
      }}
     >
       <Tab.Screen name="Hành động" component={() => <ListItemByCategoryComponent categoryId={1} />} />
       <Tab.Screen name="Tiểu thuyết" component={() => <ListItemByCategoryComponent categoryId={2} />} />
       <Tab.Screen name="Kinh dị" component={() => <ListItemByCategoryComponent categoryId={3} />} />
       <Tab.Screen name="Tình yêu" component={() => <ListItemByCategoryComponent categoryId={4} />} />
       <Tab.Screen name="Phá án" component={() => <ListItemByCategoryComponent categoryId={5} />} />
       <Tab.Screen name="Hài hước" component={() => <ListItemByCategoryComponent categoryId={6} />} />
     </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
