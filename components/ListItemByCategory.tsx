import * as React from "react";
import { Image, Linking, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import ItemComponent from "./Item";
import { ScrollView } from "react-native-gesture-handler";
import { getDataByCategory } from "../service/service";

// const DATA = [
//   {
//     id: 1,
//     name: 'Truyen ngon tinh ABC',
//     desc: '23 react-navigation-tabs depends on react-navigation package.',
//     img: require('../assets/commic/nghich-thien-chien-than/avt.jpg')
//   },
//   {
//     id: 2,
//     name: 'Truyen Kinh di ABC',
//     desc: '23 react-navigation-tabs depends on react-navigation package.',
//     img: require('../assets/commic/quy-luat-nam-ban-menh-cua-ho-ly/avt.jpg')
//   },
//   {
//     id: 3,
//     name: 'Truyen hai huoc ABC',
//     desc: '23 react-navigation-tabs depends on react-navigation package.',
//     img: require('../assets/commic/tieu_thuyet-ba-thien-ha/avt.jpg')
//   },
//   {
//     id: 4,
//     name: 'Truyen pha an ABC',
//     desc: '23 react-navigation-tabs depends on react-navigation package.',
//     img: require('../assets/commic/xuyen-khong-vao-the-gioi-nu-cuong/avt.jpg')
//   }
// ]

export default function ListItemByCategoryComponent(props:{categoryId: number}) {
	const { categoryId } = props
	const [data, setData] = React.useState([])
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
						data ? data?.map(x => 
								<ItemComponent 
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
