import {useTheme} from 'react-native-paper';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  OFFLINE_SCREEN,
  SETTINGS_SCREEN,
} from '../constants/route/route';
import OfflineScreen from '../screens/OfflineScreen.tsx';
import HomeScreen from '../screens/Home.tsx';
import NetInfo from '@react-native-community/netinfo';
import {useEffect} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen.tsx';
import MenuButton from '../components/menu/MenuComponent.tsx';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {showErrorSnackbar} from '../store/reducers/SnackbarContextSlice.ts';
import {ErrorMessage} from '../models/interface.ts';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      elevation: 0,
      shadowColor: 'transparent', // this covers iOS
    },
    headerTitleAlign: 'center', // Explicitly cast to the expected type
    headerTintColor: theme.colors.secondary,
    animationEnabled: true,
    headerBackTitle: 'Back',
    headerShown: true,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        navigation.navigate(HOME_SCREEN);
      } else {
        navigation.navigate(OFFLINE_SCREEN);
        const offlineError: ErrorMessage = {
          status: 'InternetConnection',
          message: '',
        };
        dispatch(showErrorSnackbar(offlineError as ErrorMessage));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={() => ({
          title: t('common:homeTitle'),
          headerBackVisible: false,
          headerShadowVisible: false,
          headerRight: () => <MenuButton />,
        })}
      />
      <Stack.Screen
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          title: t('common:settingsTitle'),
        }}
      />
      <Stack.Screen
        name={OFFLINE_SCREEN}
        component={OfflineScreen}
        options={{
          title: t('common:offlineTitle'),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
