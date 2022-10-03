import { View, Text } from 'react-native'
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
      <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard