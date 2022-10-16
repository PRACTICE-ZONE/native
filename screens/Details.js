import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { RectButton} from '../components/Button';
import FocusStatusBar from '../components/FocusStatusBar'
import { SHADOWS, SIZES } from '../constants'

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
       >
        <Text>Button</Text>
        <View>
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>
      </FocusStatusBar>
    </SafeAreaView>
  )
}

export default Details