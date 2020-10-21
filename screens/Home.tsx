import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BannerComponent from '../components/Banner';
import HotItemComponent from '../components/HotItem';
import ListItemComponent from '../components/Offertem';

import { Text, View } from '../components/Themed';
import TrendingItemComponent from '../components/TrendingItem';


export default function HomeScreen(props: {navigation: any}) {
  const onshowDetail  = (id: any) => {
    props.navigation.navigate('Detail', {id})
  }
  return (
    <View style={styles.container}>
      <ScrollView >
        <BannerComponent />
        <ListItemComponent 
          onshowDetail={(id: any) => onshowDetail(id)}
        />
        <TrendingItemComponent 
          onshowDetail={(id: any) => onshowDetail(id)}
        />
        <BannerComponent />
        <HotItemComponent 
          onshowDetail={(id: any) => onshowDetail(id)}
        />
      </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
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