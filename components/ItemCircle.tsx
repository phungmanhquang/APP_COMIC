import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ItemCircleComponent(props: { style: any, Data: any, onshowDetail: any }) {
  return (
    <View  style={{...styles.ItemImg, ...props.style}}>
        <Image
            style={styles.ItemImg}
            source={props.Data.img}
        />
        <Text 
            style={styles.ItemTitle}
            onPress={() => {
              props.onshowDetail(props.Data.id)
            }}>
            {props.Data.name}
        </Text>
    </View>  
  );
}

const styles = StyleSheet.create({
    container: {},
    // title: { fontSize: 20, fontWeight: 400, padding: 15 }, 
    outSideList: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    Item: {
      margin: "0 auto",
      marginBottom: 12,
      display: 'flex',
      alignItems: "center",
      textAlign: "center",
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    ItemImg: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    ItemTitle: { color: "#424141", fontSize: 12, fontWeight: "bold" },
  });
  
