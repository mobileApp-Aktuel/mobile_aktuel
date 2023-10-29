import { View, Text, FlatList ,Image ,TouchableOpacity } from 'react-native'  
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import bim from '../../assets/bim.png'
import a101 from '../../assets/a101.png'
import migros from '../../assets/migros.jpg'
import carrefour from '../../assets/carrefour.jpg'
import şok from '../../assets/şok.jpg'
import tarim from '../../assets/tarim.jpg'
import { useNavigation } from '@react-navigation/native'


export default function Home() {
  const navigate=useNavigation()

  const markets=[
    {
      id:1,
      imgUrl:bim
    },
    {
      id:2,
      imgUrl:a101
    },
    {
      id:3,
      imgUrl:migros
    },
    {
      id:4,
      imgUrl:carrefour
    },
    {
      id:5,
      imgUrl:şok
    },
    {
      id:6,
      imgUrl:tarim
    },
    {
      id:7,
      imgUrl:bim
    },
    {
      id:8,
      imgUrl:a101
    },
    
    

  ]

  const numColumns=2
  return (
  <SafeAreaView className="flex-1 items-center bg-white">
    <View className="w-[95%] bg-gray-200 basis-3/12"></View>
    <View className="w-[95%]  basis-9/12">
      <FlatList 
      data={markets}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigate.navigate("StackOne")} className="w-[43%] h-40 m-3 flex justify-center items-center 
        p-2 rounded-2xl border-2 border-[#FF6347]">
          <View className="w-full h-full bg-gray-200 rounded-lg">
            <Image source={item.imgUrl}className="w-full h-full"/>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item)=>item.id}
      numColumns={numColumns}
      
      />
    </View>
  </SafeAreaView>
  )
}