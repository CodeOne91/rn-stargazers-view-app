import {useTheme} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_SCREEN, OFFLINE_SCREEN} from '../constants/route/route';
import OfflineScreen from '../screens/OfflineScreen.tsx';
import HomeScreen from '../screens/Home.tsx';
import NetInfo from '@react-native-community/netinfo';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const theme = useTheme();
  const navigation = useNavigation();

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
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={OFFLINE_SCREEN} component={OfflineScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
