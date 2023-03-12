import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';
import { EthPrice } from './SubInfo';

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.radius,
      marginBottom: SIZES.small
    }}>
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{ width: 50, height: 50 }}
      />
      <View>
        <Text
          
        >Bid placed by <Text style={{
          fontSize: SIZES.large,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>{bid.name}</Text>
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