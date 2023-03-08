import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View>
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{ width: 50, height: 50 }}
      />
      <View>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.bold,
            color: COLORS.primary
          }}
        >Bid placed by {bid.name}</Text>
      </View>
    </View>
  )
}

export default DetailsBid;