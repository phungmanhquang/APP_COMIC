import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";
import { getComicLiked } from "../service/service";

export default function ListItemLikedComponent(props: {onshowDetail: any}) {
  const [data, setData] = React.useState<any[]>([])
  const reset = () => {
    setData( getComicLiked() )
  }
	React.useEffect(() => {
		setData( getComicLiked() )
	},[])
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Đề xuất</Text>
      <View style={styles.outSideList}>
        {
          data.map(x => 
              <ItemComponent 
                Data={x}
                style={{width: '48%', height: 160}} 
                showDesc  
                onshowDetail={props.onshowDetail}
                reset={() => reset()}
                showLiked
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
