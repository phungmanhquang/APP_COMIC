import { sortContet } from "./data"
import { FullContent } from "./dataFullcontent"

export const getDataByCategory = (category: any) => {
	console.log('service ::: ', sortContet.filter(x => x.type === category))
	return sortContet.filter(x => x.type === category)}

export const getComicById = (id: any) => FullContent.find(x => x.id === id)

export const getComicLiked = () => sortContet.filter(x => x.liked === true)
