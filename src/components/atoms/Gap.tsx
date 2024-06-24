import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    height: number
}

const Gap = (props: Props) => {
  return (
    <View style={{height:props.height}} testID='gap'>
      
    </View>
  )
}

export default Gap