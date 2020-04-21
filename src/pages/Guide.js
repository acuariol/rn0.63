import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { setStore } from '../utils/util';

const Guide = () => {
  const goApp = () => {
    setStore('guide', 'false');
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Text</Text>
        <Button color="red" title="进入应用" onPress={goApp} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#676767',
  },
});

export default Guide;
