import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import youtube from '../api/youtube'
import { YOUTUBE_KEY } from '../config'
//import response from '../data/video.json'
import { WebView } from 'react-native-webview';

const DetailScreen = ({route}) => {

  const [video, setVideo] = useState(null)
  const {id} = route.params

  const searchVideo = async () => {
    try {
      const response = await youtube.get("/videos", {
        params: {
          part: "snippet",
          id,
          key: YOUTUBE_KEY
        }
      })

      const formettedVideo = {
        id,
        title: response.data.items[0].snippet.title,
        desc: response.data.items[0].snippet.description
      }

      setVideo(formettedVideo)
    } catch (error) {
      setErrorMessage('Something went wrong!')
    }
  }

  useEffect(() => {
    searchVideo()
  }, [])

  if(!video) {
    return <Text>Loading...</Text>
  }

  const html = `
    <iframe 
      width="800" 
      height="800" 
      style="margin: auto; display: block;"
      src="https://www.youtube.com/embed/${id}" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
    <p style="font-size: 48px; text-align: center">${video.title}</p>
    <p style="font-size: 24px; text-align: center">${video.desc}</p>
  `

  return <View style={styles.container}>
    <WebView source={{ html }} style={{ marginTop: 20, flex: 1 }} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default DetailScreen