import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style = {
      {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
      }
    }
    onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={{ width: 20, height: 20 }} />
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity style = {
      {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
      }
    }
    onPress={handlePress}
    >
      <Text style = {
        {
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.primary
        }
      }>Buy</Text>
    </TouchableOpacity>
  )
}
        }
      }>Place a bid</Text>
    </TouchableOpacity>
  )
}
