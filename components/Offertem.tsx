import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";

const DATA = [
  {
    id: 1,
    name: 'Truyen ngon tinh ABC',
    desc: '23 react-navigation-tabs depends on react-navigation package.',
    img: require('../assets/commic/nghich-thien-chien-than/avt.jpg')
  },
  {
    id: 2,
    name: 'Truyen Kinh di ABC',
    desc: '23 react-navigation-tabs depends on react-navigation package.',
    img: require('../assets/commic/quy-luat-nam-ban-menh-cua-ho-ly/avt.jpg')
  },
  {
    id: 3,
    name: 'Truyen hai huoc ABC',
    desc: '23 react-navigation-tabs depends on react-navigation package.',
    img: require('../assets/commic/quyen-ba-thien-ha/avt.jpg')
  },
  {
    id: 4,
    name: 'Truyen pha an ABC',
    desc: '23 react-navigation-tabs depends on react-navigation package.',
    img: require('../assets/commic/xuyen-khong-vao-the-gioi-nu-cuong/avt.jpg')
  }
]

export default function ListItemComponent(props: {onshowDetail: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Đề xuất</Text>
      <View style={styles.outSideList}>
        {
          DATA.map(x => 
              <ItemComponent 
                Data={x}
                style={{width: '48%', height: 160}} 
                showDesc  
                onshowDetail={props.onshowDetail}
              />
          )
        }
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  titleText: { 
    fontSize: 25, 
    fontWeight: '400', 
    marginBottom: 12  
  },
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
