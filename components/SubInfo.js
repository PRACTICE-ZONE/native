import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets, SIZES } from '../constants'

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const EthPrice = () => {
    return (
      <View>
        <Text>SubInfo</Text>
      </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
      <Image 
      source={imgUrl}
      resizeMode='contain'
      style={{
          width:40,
          height: 40,
          marginLeft: index === 0 ? 0: SIZES.font,
        }}
        />
    )
}

export const People = () => {
    return (
      <View style={
        {
          flexDirection: 'row',
        }
      }>
        {
        [assets.person02, assets.person03, assets.person04].map((item, index) => <ImageCmp key={index} source={item} />)
        }
      </View>
    )
}

export const EndDate = () => {
  return(
    <View>
      <Text>
        EndDate
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return(
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <People />
      <EthPrice />
      <Text>
        EndDate
      </Text>
    </View>
  )
}