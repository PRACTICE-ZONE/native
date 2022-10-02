import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native-web';
import { FocusStatusBar } from '../components'
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={ { flex: 1} }>
      <FocusStatusBar background={COLORS.primary} />
      <View style={ { flex: 1} } >
        <View style= { { zIndex: 0 } } >
          <FlatList data={NFTData} 
          renderItem={({item}) => <Text>{item.title}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home