import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getComicById } from '../service/service';
import { AntDesign } from '@expo/vector-icons'; 

import { RootStackParamList } from '../types';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailScreen({
  navigation , route
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [data, setData] = React.useState<any>()

  React.useEffect(() =>  {
    const id = route.params?.id;
    if(id){
      setData(getComicById(id))
    }
    console.log('route ::: ', getComicById(id))
  }, [])
  return (
    <View style={styles.container}>
        <View style={styles.Header}>
          <AntDesign 
            style={styles.IconBack} 
            name="back" size={24} 
            color="black" 
            onPress={() => navigation.goBack()}  
          />
          <Image 
             style={styles.ItemImg}
             source={data?.img || ''}
          />
          <Text style={styles.Title}>
              {data?.name || ''}
          </Text>
        </View>
        <ScrollView >   
          <Text>{data?.content || ''}</Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  Header:{
    width:  '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    borderBottomColor: '#bae7ff',
    borderBottomWidth: 2,
    paddingBottom: 3,
    marginBottom: 3,
    paddingTop: 3
  },
  ItemImg: {
    width: 35,
    height: 35
  },
  Title: {
    color: '#0050b3',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 5
  },
  IconBack: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 5
  }
});
