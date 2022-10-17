import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { RectButton} from '../components/Button';
import { DetailsBid, FocusStatusBar } from '../components'
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
       <View style = {{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1
       }}>
         <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS} />
       </View>
       <FlatList 
        data={data.bids}
        renderItem = {({item}) => (<DetailsBid {...item} />)}
        keyExtractor = {item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {{
          paddingVertical: SIZES.font,
          paddingHorizontal: SIZES.padding
        }}
        
        />
    </SafeAreaView>
  )
}

export default Details