import { useEffect, useState } from 'react'
import youtube from '../api/youtube'
import {YOUTUBE_KEY} from '../config'
import response from '../data/videos.json'

export default () => {
  const [videos, setVideos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchVideos = async () => {
    try {
      /*
      const response = await youtube.get("/search", {
        params: {
          q: 'fitness',
          part: "snippet",
          maxResults: 5,
          type: 'video',
          key: YOUTUBE_KEY
        }
      })
      */
     
      const formattedVideos = response.data.items.map(item => {
        return {
          id: item.id.videoId,
          desc: item.snippet.description,
          thumbnail: item.snippet.thumbnails.default.url,
          title: item.snippet.title
        }
      })

      setVideos(formattedVideos)
    } catch (error) {
      setErrorMessage('Something went wrong!')
    }
  }

  useEffect(() => {
    searchVideos()
  }, [])

  return [videos, errorMessage]
}