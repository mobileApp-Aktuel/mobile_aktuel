import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigate=useNavigation()
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={()=>navigate.navigate('StackTwo')}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}