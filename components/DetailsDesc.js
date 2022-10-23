import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, FONTS, SIZES } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'center',
      }}>
        <NFTTitle
          title = {data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.large}
         />
         <EthPrice price={data.price} />
      </View>
      <View style={{
        marginVertical: SIZES.extraLarge + 1.5,
      }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>descripto</Text>
        <View style = { { marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>{text} {!showMore && '....'}</Text>
          
        </View>
      </View>
    </>
  )
}
       
export default DetailsDesc;