import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const getStore = async (name = '') => {
  try {
    return  await AsyncStorage.getItem(name);
  } catch (error) {

  }
};

const setStore = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {

  }
};

export { getStore, setStore };
