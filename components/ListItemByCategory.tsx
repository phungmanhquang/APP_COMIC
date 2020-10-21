import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";
import { ScrollView } from "react-native-gesture-handler";
import { getDataByCategory } from "../service/service";

export default function ListItemByCategoryComponent(props:{categoryId: number, onshowDetail: any}) {
	const { categoryId } = props
	const [data, setData] = React.useState<any[]>([])
	React.useEffect(() => {
		switch (props.categoryId) {
			case 1:
				setData(getDataByCategory('hanh_dong'))
				break;
			case 2:
				setData(getDataByCategory('tieu_thuyet'))
				break;
			case 3:
				setData(getDataByCategory('kinh_di'))
				break;
			case 4:
				setData(getDataByCategory('tinh_yeu'))
				break;
			case 5:
				setData(getDataByCategory('pha_an'))
				break;
			case 6:
				setData(getDataByCategory('hai_huoc'))
				break;
			default:
				break;
		}
	},[categoryId])
  return (
		<ScrollView >
			<View style={styles.container}>
				<View style={styles.outSideList}>
					{
						data ? data?.map((x, i) => 
								<ItemComponent 
									onshowDetail={props.onshowDetail}
									key={i}
									Data={x}
									style={{width: '32%', height: 200}} 
									showDesc  
								/>
						) : null
					}
				</View>
			</View>
		</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  outSideList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
