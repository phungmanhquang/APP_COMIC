import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItemLikedComponent from '../components/ListItemLiked';

import { Text, View } from '../components/Themed';

export default function LikedScreend(props: {navigation: any}) {
  const onshowDetail  = (id: any) => {
    props.navigation.navigate('Detail', {id})
	}
	const [data, setData] = React.useState<number>(Math.random())
	React.useEffect(() => {
		console.log('zozozozo ::: LikedScreend sad')
	},[])
  return (
    <View style={styles.container}>
      <ScrollView >
        <ListItemLikedComponent 
          onshowDetail={(id: any) => onshowDetail(id)}
        />
				{
					console.log('data ::::: ', data)
				}
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