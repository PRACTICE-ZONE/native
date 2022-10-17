import React from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CircleButton, RectButton} from '../components/Button';
import { DetailsBid, FocusStatusBar } from '../components'
import { assets, SHADOWS, SIZES } from '../constants'

const DetailsHeader = ({data, navigation}) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image 
      source = {data.image}
      resizeMode='cover'
      style={{ width: '100%', height: '100%'}}
      />
      <CircleButton
      imgUrl={assets.left}
      handlePress= {() => navigation.goBack()}
      left = {10}
      top = {StatusBar.currentHeight + 10 }
      />
      <CircleButton
      imgUrl={assets.heart}
      right = {10}
      top = {StatusBar.currentHeight + 10 }
      />
    </View>
  )
}
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
         <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
       </View>
       <FlatList 
        data={data.bids}
        renderItem = {({item}) => <DetailsBid bid={item} />}
        keyExtractor = {item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent = { () => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}/>
          </React.Fragment>
        )}
        />
    </SafeAreaView>
  )
}

export default Details