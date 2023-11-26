import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));
  const [slideAnimation] = useState(new Animated.Value(100)); // New animated value for vertical translation

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowImage(true);
      // Start the slide-in animation
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, [slideAnimation]);

  useEffect(() => {
    const breathingAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };

    breathingAnimation();

    return () => scaleValue.stopAnimation();
  }, [scaleValue]);

  return (
    <ImageBackground source={require('../assets/Home_Page_Background.jpg')} style={styles.backgroundImage} blurRadius={5}>
      <SafeAreaView style={styles.Container}>
        {showImage && (
          <Animated.View style={[styles.Bottom, { transform: [{ translateY: slideAnimation }] }]}>
            <Text style={styles.welcomeText}>
              Welcome
            </Text>
            <Text style={styles.welcomesubText}>
              Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet
            </Text>
            <TouchableOpacity>
              <Animated.Image
                source={require('../assets/Next_Button.png')}
                style={[styles.imgNext, { transform: [{ scale: scaleValue }] }]}
              />
            </TouchableOpacity>
            <Text style={styles.welcomesubText}>
              Continue
            </Text>
          </Animated.View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'repeat',
  },
  Container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 50,
  },
  Bottom: {
    position: 'absolute',
    height: '40%',
    backgroundColor: 'white',
    width: '100%',
    top: 650,
    borderRadius: 30,
    alignItems: 'center',
  },
  welcomesubText: {
    width: '90%',
    textAlign: 'center',
    fontSize: 20,
  },
  imgNext: {
    marginTop: 25,
    marginBottom: 10,
    height: 50,
    width: 50,
  },
});

export default Home;
