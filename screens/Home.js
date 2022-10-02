import React from 'react'
import { FlatList, Text, View, SafeAreaView } from 'react-native'
import { FocusStatusBar, HomeHeader } from '../components'
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={ { flex: 1} }>
      <FocusStatusBar background={COLORS.primary} />
      <View style={ { flex: 1} } >
        <View style= { { zIndex: 0 } } >
          <FlatList data={NFTData} 
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={
          { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }
        }>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home