import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import CircleButton from './Button'

const NFTCard = ({ data }) => {

  return (
    <View style = {
      {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        mrgin: SIZES.base,
        ...SHADOWS.dark
      }
    }>
      <View style = { { width: "100%", height: 250 } }>
        <Image source={data.image}
          resizeMode="cover"
         style={{ width: "100%", height: "100%", borderTopRightRadius: SIZES.font, borderTopLeftRadius: SIZES.font }} />
      </View>
      <CircleButton imgUrl={assets.heart} right={10} top={10} />
    </View>
  )
}

export default NFTCard