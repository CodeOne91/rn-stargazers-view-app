import React, {useState} from 'react';
import {toggleTheme} from '../store/reducers/isThemeDarkSlice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StatusBar, StyleSheet, Switch} from 'react-native';
import {List, useTheme} from 'react-native-paper';
import LanguageSelectorModal from '../components/modal/LanguageSelectorModal.tsx';
import {useTranslation} from 'react-i18next';

interface Props {}

const SettingsContainer: React.FC<Props> = () => {
  const {i18n, t} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(i18n.language);

  const isDarkMode = useSelector((state: any) => state.theme?.isDarkMode);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };
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
            {t('common:theme')}
          </List.Subheader>
          <List.Item
            title={t('common:darkTheme')}
            right={() => (
              <Switch
                value={isDarkMode}
                onValueChange={val => toggleThemeSwitch(val)}
              />
            )}
          />
          <List.Item
            title={t('common:selectALanguage')}
            right={() => (
              <LanguageSelectorModal
                language={language}
                onLanguageChange={handleLanguageChange}
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
