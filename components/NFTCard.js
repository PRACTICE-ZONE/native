import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

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
        <Image source={data.image} style={{ width: "100%", height: "100%", borderRadius: SIZES.font }} />
      </View>
      <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard