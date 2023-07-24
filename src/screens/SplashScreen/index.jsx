import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SPLASH_TIME_OUT = 2000;

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      navigation.navigate('Home');
    }, SPLASH_TIME_OUT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View style={styles.flex} />;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default Splash;
