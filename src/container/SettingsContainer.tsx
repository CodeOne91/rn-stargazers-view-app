import React, {useState} from 'react';
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

  const handlePressLinkedin = async () => {
    await Linking.openURL(LINKEDIN_LINK);
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
          <List.Subheader
            style={[styles.subheader, {color: theme.colors.secondary}]}>
            {t('common:language')}
          </List.Subheader>
          <List.Item
            title={t('common:selectALanguage')}
            right={() => (
              <LanguageSelectorModal
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            )}
          />
          <List.Subheader
            style={[styles.subheader, {color: theme.colors.secondary}]}>
            {t('common:credits')}
          </List.Subheader>
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
