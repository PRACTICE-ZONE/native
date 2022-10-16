import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { RectButton} from '../components/Button';
import { FocusStatusBar } from '../components'
import { SHADOWS, SIZES } from '../constants'

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
       />
       <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS} />
    </SafeAreaView>
  )
}

export default Details