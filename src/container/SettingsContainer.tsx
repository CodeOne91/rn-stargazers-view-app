import React from 'react';
import {toggleTheme} from '../store/reducers/isThemeDarkSlice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StatusBar, StyleSheet, Switch} from 'react-native';
import {List, useTheme} from 'react-native-paper';

interface Props {}

const SettingsContainer: React.FC<Props> = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const isDarkMode = useSelector((state: any) => state.theme?.isDarkMode);

  const toggleThemeSwitch = async (val: boolean) => {
    dispatch(toggleTheme(val));
  };

  return (
    <>
      <StatusBar barStyle="light-content" animated={true} />
      <ScrollView style={styles.scrollView}>
        <List.Section>
          <List.Subheader
            style={[styles.subheader, {color: theme.colors.secondary}]}>
            THEME
          </List.Subheader>
          <List.Item
            title={'THEME'}
            right={() => (
              <Switch
                value={isDarkMode}
                onValueChange={val => toggleThemeSwitch(val)}
              />
            )}
          />
        </List.Section>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 2,
  },
  subheader: {
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
    fontSize: 16,
  },
});
export default SettingsContainer;
