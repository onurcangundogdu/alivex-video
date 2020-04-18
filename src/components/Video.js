import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Video = ({video}) => {
  return <View style={styles.videoContainer}>
    <Image style={styles.thumbnail} source={{uri: video.thumbnail}} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{video.title}</Text>
      <Text>{video.desc}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    flex: 1
  },
  thumbnail: {
    height: 150,
    width: 150
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1
  }
})

export default Video