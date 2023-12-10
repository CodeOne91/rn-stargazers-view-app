import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Menu, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SETTINGS_SCREEN} from '../../constants/route/route';
import {useTranslation} from 'react-i18next';

const MenuButton = () => {
  const [visible, setVisible] = React.useState(false);
  const navigator = useNavigation();
  const theme = useTheme();
  const {t} = useTranslation();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      }>
      <Menu.Item
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
