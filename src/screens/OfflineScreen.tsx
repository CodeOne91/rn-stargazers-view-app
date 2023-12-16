import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../constants/route/route';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';
import {useTranslation} from 'react-i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OfflineScreen: React.FC = () => {
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        navigator.navigate(HOME_SCREEN);
      }
    });
  };

  return (
    <BasicScreenComponent>
      <View style={[styles.container]}>
        <Text style={styles.title}>{t('common:noInternetTitle')}</Text>
        <Text style={styles.subtitle}>{t('common:checkYourConnection')}</Text>
        <Button mode="contained" onPress={getNetInfo}>
          {t('common:retry')}
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
