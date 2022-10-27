import { View, Text, Image } from 'react-native'
import React from 'react'

const DetailsBid = ({ bid }) => {
  return (
    <View>
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{ width: 50, height: 50 }}
      />
    </View>
  )
}

export default DetailsBid;