import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import FocusStatusBar from '../components/FocusStatusBar'
import { SHADOWS, SIZES } from '../constants'

const Details = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
       >
        <View>
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>
      </FocusStatusBar>
    </SafeAreaView>
  )
}

export default Details