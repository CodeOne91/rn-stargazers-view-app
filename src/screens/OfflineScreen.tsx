import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../constants/route/route';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';

const OfflineScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        navigation.navigate(HOME_SCREEN);
      }
    });
  };

  return (
    <BasicScreenComponent>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <Text style={styles.title}>NO INTERNET</Text>
        <Text style={styles.subtitle}>CHECK YOUR DATA CONNECTION</Text>
        <Button mode="contained" onPress={getNetInfo}>
          RETRY
        </Button>
      </View>
    </BasicScreenComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OfflineScreen;