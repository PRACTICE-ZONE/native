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
      <View>
        <Text>Bid placed by {bid.name}</Text>
      </View>
    </View>
  )
}

export default DetailsBid;