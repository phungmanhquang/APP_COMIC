import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";

const DATA_1 =
  {
    id: 1,
    name: 'Truyen ngon tinh ABC',
    desc: '23 react-navigation-tabs depends on react-navigation package.',
    img: require('../assets/commic/nghich-thien-chien-than/avt.jpg')
  }

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
]

export default function TrendingItemComponent(props: {onshowDetail: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText} >Thịnh hành</Text>
      <View style={styles.outSideList}>
        <ItemComponent 
            onshowDetail={props.onshowDetail}
            Data={DATA_1}
            style={{width: '100%', height: 150}} 
            showDesc  
        />
        {
          DATA.map(x => 
              <ItemComponent 
                onshowDetail={props.onshowDetail}
                Data={x}
                style={{width: '31%', height: 175}} 
                showDesc  
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
