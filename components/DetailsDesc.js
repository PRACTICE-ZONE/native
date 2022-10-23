import { View, Text } from 'react-native'
import React from 'react'
import { EthPrice, NFTTitle } from './SubInfo';
import { SIZES } from '../constants';

const DetailsDesc = ({ data }) => {
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
    </>
  )
}

export default DetailsDesc;