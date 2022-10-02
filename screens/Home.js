import React from 'react'
import { FlatList, Text, View, SafeAreaView } from 'react-native'
import { FocusStatusBar } from '../components'
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={ { flex: 1} }>
      <FocusStatusBar background={COLORS.primary} />
      <View style={ { flex: 1} } >
        <View style= { { zIndex: 0 } } >
          <FlatList data={NFTData} 
          renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home