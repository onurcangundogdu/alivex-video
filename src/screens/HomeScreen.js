import React, {useState} from 'react'
import {View, Text, StyleSheet, Animated, ScrollView, Dimensions} from 'react-native'
import useVideos from '../hooks/useVideos'
import Videos from '../components/Videos'

const HEADER_MAX_HEIGHT = Math.round(Dimensions.get('window').height / 3);
const HEADER_MIN_HEIGHT = Math.round(Dimensions.get('window').height / 6);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HomeScreen = ({navigation}) => {

  const [state, setState] = useState({scrollY: new Animated.Value(0)})
  const [videos, errorMessage] = useVideos()

  const renderScrollViewContent = () => {
    return (
      <View style={styles.scrollViewContent}>
        <Videos videos={videos} navigation={navigation} />
      </View>
    );
  }

  const headerHeight = state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageTranslate = state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.fill}>
      <ScrollView
        style={styles.fill}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: state.scrollY}}}]
        )}
      >
        {renderScrollViewContent()}
      </ScrollView>
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.Image
          style={[
            styles.backgroundImage,
            {transform: [{translateY: imageTranslate}]},
          ]}
          source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}
        />
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden'
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
  }
})

export default HomeScreen