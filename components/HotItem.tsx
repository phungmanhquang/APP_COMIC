import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemCircleComponent from "./ItemCircle";

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
  },
]

export default function HotItemComponent() {
  return (
    <View style={styles.container}>
      <Text >Truyện hot</Text>
      <View style={styles.outSideList}>
        {
          DATA.map(x => 
              <ItemCircleComponent 
                Data={x}
                style={{width: '24%', height: 80}} 
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
  // title: { 
  //     fontSize: 20, 
  //     fontWeight: 400 , 
  //     marginBottom: 12 
  //   },
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
