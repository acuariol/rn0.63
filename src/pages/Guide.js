import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Guide = () => {

  return (
    <>
      <View style={styles.container}>
        <Text>Guide</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Guide;
