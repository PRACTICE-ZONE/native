import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import FocusStatusBar from '../components/FocusStatusBar'

const Details = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}

       >

      </FocusStatusBar>
    </SafeAreaView>
  )
}

export default Details