import React, {useCallback, useState} from 'react';
import {toggleTheme} from '../store/reducers/isThemeDarkSlice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {List, useTheme, Switch} from 'react-native-paper';
import LanguageSelectorModal from '../components/modal/LanguageSelectorModal.tsx';
import {useTranslation} from 'react-i18next';
import {LINKEDIN_LINK} from '../constants/socialLink';

interface Props {}

const SettingsContainer: React.FC<Props> = () => {
  // Language translation hooks and states
  const {i18n, t} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(i18n.language);

  // Redux state for dark mode
  const isDarkMode = useSelector((state: any) => state.theme?.isDarkMode);

  // Callback to handle language change
  const handleLanguageChange = useCallback((newLanguage: string) => {
    setLanguage(newLanguage);
  }, []);

  // Callback to toggle dark mode
  const toggleThemeSwitch = useCallback(
    async (val: boolean) => {
      dispatch(toggleTheme(val));
    },
    [dispatch],
  );

  // Callback to handle LinkedIn link press
  const handlePressLinkedin = useCallback(async () => {
    await Linking.openURL(LINKEDIN_LINK);
  }, []);

  return (
    <>
      {/* Status bar with light content style */}
      <StatusBar barStyle="light-content" animated={true} />
      {/* Main content in a scrollable view */}
      <ScrollView style={styles.scrollView}>
        {/* Section for theme settings */}
        <List.Section>
          {/* Subheader for theme */}
          <List.Subheader
            style={[styles.subheader, {color: theme.colors.secondary}]}>
            {t('common:theme')}
          </List.Subheader>
          {/* Switch to toggle dark theme */}
          <List.Item
            title={t('common:darkTheme')}
            right={() => (
              <Switch
                value={isDarkMode}
                onValueChange={val => toggleThemeSwitch(val)}
              />
            )}
          />
          {/* Subheader for language settings */}
          <List.Subheader
            style={[styles.subheader, {color: theme.colors.secondary}]}>
            {t('common:language')}
          </List.Subheader>
          {/* Item to open language selector modal */}
          <List.Item
            title={t('common:selectALanguage')}
            right={() => (
              <LanguageSelectorModal
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            )}
          />
          {/* Subheader for credits */}
          <List.Subheader
            style={[styles.subheader, {color: theme.colors.secondary}]}>
            {t('common:credits')}
          </List.Subheader>
          {/* Item with LinkedIn link */}
          <TouchableOpacity onPress={handlePressLinkedin}>
            <List.Item
              title={t('common:salvatore')}
              right={() => (
                <Image
                  style={styles.image}
                  source={require('../assets/logo/linkedin-logo.png')}
                />
              )}
            />
          </TouchableOpacity>
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
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default SettingsContainer;
