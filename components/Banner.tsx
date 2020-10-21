import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function BannerComponent() {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/banner/banner1.jpg')} 
            style={styles.banner}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  banner: {
    width: '100%',
    height: 150
  }
});
