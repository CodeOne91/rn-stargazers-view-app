import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Menu, useTheme} from 'react-native-paper';
import {ParamListBase, useNavigation} from '@react-navigation/native';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SETTINGS_SCREEN} from '../../constants/route/route';
import {useTranslation} from 'react-i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MenuButton = () => {
  const [visible, setVisible] = React.useState(false);
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const theme = useTheme();
  const {t} = useTranslation();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      testID="menu-component" // Add testID to the Menu component
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity
          testID="menu-button" // Add testID to the TouchableOpacity
          style={styles.menuButton}
          onPress={openMenu}>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      }>
      <Menu.Item
        testID="menu-item" // Add testID to the Menu.Item
        title={t('common:settings')}
        leadingIcon={() => (
          <MaterialIcons
            name="settings"
            size={24}
            color={theme.colors.primary}
          />
        )}
        onPress={() => {
          navigator.navigate(SETTINGS_SCREEN);
          closeMenu();
        }}
      />
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    padding: 10,
  },
});

export default MenuButton;
