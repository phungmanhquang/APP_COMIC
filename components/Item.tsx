import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ItemComponent(props: { style: any, showDesc: boolean, Data: any, onshowDetail: any }) {
  React.useEffect(() => {
    // console.log('zozoz ::', props.Data)
  }, [props.Data])
  return (
    <View style={{ ...styles.ItemImg, ...props.style }}>
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
      {
        props.showDesc ?
          <Text style={styles.ItemDesc}>
            {props.Data.desc}
          </Text>
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: { fontSize: 20, fontWeight: "400", padding: 15 },
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  Item: {
    margin: "0 auto",
    marginBottom: 12,
  },
  ItemImg: {
    width: "100%",
    height: 100,
    borderRadius: 4,
  },
  ItemTitle: { color: "#424141", fontSize: 12, fontWeight: "bold" },
  ItemDesc: { color: "#9e9e9e", fontSize: 10 },
});

