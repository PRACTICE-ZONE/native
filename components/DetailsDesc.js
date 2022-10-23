import { View, Text } from 'react-native'
import React from 'react'
import { EthPrice, NFTTitle } from './SubInfo';
import { SIZES } from '../constants';

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View>
        <NFTTitle
          title = {data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.large}
         />
         <EthPrice price={data.price} />
      </View>
    </>
  )
}

export default DetailsDesc;