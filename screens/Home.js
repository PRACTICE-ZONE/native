import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native';
import { FocusStatusBar } from '../components'
import { COLORS } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={ { flex: 1} }>
      <FocusStatusBar background={COLORS.primary} />
    </SafeAreaView>
  )
}

export default Home