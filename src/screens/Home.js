import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBtn from '../res/CustomBtn'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPI } from '../redux/actions/Action'

const { width, height } = Dimensions.get("window")

const Home = () => {
  const [tag, setTag] = useState("Beach")
  const [searchText, setSearchText] = useState("")
  const state = useSelector(state => state.dataReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAPI({ tags: tag }));
  }, [tag])

  // console.log("REDUX STATE", state.APIData.photos.photo);

  const btn = [{
    title: "Mountain"
  }, {
    title: "Beaches"
  }, {
    title: "Birds"
  }, {
    title: "Food"
  }]

  const generateImgURL = (item) => {
    const imgURL = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`
    // console.log("IMAGE URL", imgURL);
    return imgURL
  }

  const renderItem = ({ item }) => {
    console.log("ITEM", generateImgURL(item));
    return (
      <View style={{
        backgroundColor: "#1B2430", margin: 10,
        width: width * 0.42, height: height * 0.3
      }}>
        <Image
          resizeMode='stretch'
          style={{ width: "100%", height: "100%" }}
          // source={{uri:"https://farm66.staticflickr.com/65535/52188358978_1005f6e9ce_m.jpg"}}
          // source={require("../assets/images/PNG/Search.png")}
          source={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg` }}
        />
      </View>
    )
  }
  console.log("check", searchText);

  const searchImg = () => {
    if (searchText.length > 0) {
      setTag(searchText)
      setSearchText("")
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#F0EBE3", }}>
      <View style={{ padding: 10, flex: 1, }}>
        <View style={{ alignItems: "flex-end", height: "5%", marginBottom: "5%" }}>
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "#1B2430", fontStyle: "italic" }}>Welcome Mohit to SNAPSHOT</Text>
        </View>
        <View style={{ flex: 3, }}>
          <View style={{ marginBottom: "5%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderWidth: 2, borderColor: "lightgray", borderRadius: 10 }}>
            <TextInput
              placeholder='Search'
              style={{ paddingHorizontal: 5, fontSize: 15, color: "#1B2430" }}
              value={searchText}
              onChangeText={(val) => {
                setSearchText(val)
                // console.log(val);
              }}
               />
            <TouchableOpacity onPress={() => { searchImg() }} style={{}}>
              <Image source={require("../assets/images/PNG/Search.png")} style={{ width: 20, height: 20, color: "#F0EBE3" }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {btn.map((item, index) => {
              return (
                <View key={index} style={{ margin: 5, backgroundColor: "#1B2430", width: width * 0.22, alignItems: "center", borderRadius: 10 }}>
                  <CustomBtn name={item.title} onClick={() => { setTag(item.title) }} />
                </View>
              )
            })}
          </View>
          <View>
            <FlatList
              data={state?.APIData?.photos?.photo.length > 0 ? state?.APIData?.photos?.photo : []}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </View>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({})