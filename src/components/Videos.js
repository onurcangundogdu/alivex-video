import React from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import Video from './Video'

const Videos = ({videos, navigation}) => {
  return <View>
    <FlatList
      data={videos}
      keyExtractor={video => video.id }
      renderItem={({item}) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
          <Video video={item} />
        </TouchableOpacity>
      }}
    />
  </View>
}

const styles = StyleSheet.create({})

export default Videos