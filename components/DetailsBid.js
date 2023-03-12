import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';
import { EthPrice } from './SubInfo';

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
            fontFamily: FONTS.semiBold,
            color: COLORS.primary
          }}
        >Bid placed by {bid.name}
        </Text>

        <Text
          style={{
            fontSize: SIZES.small-2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            marginTop: 3
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price = {bid.price} />
    </View>
  )
}

export default DetailsBid;