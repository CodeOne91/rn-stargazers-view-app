import React, {useState, useRef, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AVAILABLE_LANGUAGES} from '../../constants/translations/LanguagesAvailable';
import {Button, useTheme} from 'react-native-paper';

interface LanguageSelectorModalProps {
  language: string;
  onLanguageChange: (newLanguage: string) => void;
}

const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  language,
  onLanguageChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef<View>(null);
  const {i18n} = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    // Reload language resources when the language changes
    try {
      i18n.reloadResources();
    } catch (e) {
      console.log(e);
    }
  }, [language]);

  const openModal = () => {
    // Open the language selection modal
    setModalVisible(true);
  };

  const closeModal = () => {
    // Close the language selection modal
    setModalVisible(false);
  };

  const handleModalPress = (event: React.MouseEvent<View, MouseEvent>) => {
    // Close the modal when clicking outside its content
    // @ts-ignore
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const handleLanguagePress = (selectedLanguage: {
    label: string;
    value: string;
  }) => {
    // Change the language and save it to AsyncStorage
    try {
      i18next.changeLanguage(selectedLanguage.label);
      AsyncStorage.setItem('user-language', selectedLanguage.label);
      onLanguageChange(selectedLanguage.label); // notify parent component of language change
    } catch (e) {
      console.log('Language selector error: ', e);
    }
    closeModal();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={closeModal}>
        {/* Language selection modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <TouchableWithoutFeedback onPress={handleModalPress}>
            <View ref={modalRef} style={styles.centeredView}>
              <View
                style={{
                  margin: 15,
                  padding: 25,
                  width: '80%',
                  borderRadius: 20,
                  alignItems: 'center',
                  backgroundColor: theme.colors.background,
                }}>
                {/* Language selection buttons */}
                {AVAILABLE_LANGUAGES?.map(languageOption => (
                  <Button
                    key={languageOption.label}
                    style={styles.languageButton}
                    onPress={() => handleLanguagePress(languageOption)}
                    labelStyle={{fontSize: 18}}>
                    {languageOption.value}
                  </Button>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableWithoutFeedback>
      {/* Button to open the language selection modal */}
      <Button onPress={openModal}>
        {AVAILABLE_LANGUAGES.find(lng => lng.label === language)?.value}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51,50,50,0.7)',
  },

  languageButton: {
    paddingVertical: 10,
    marginBottom: 5,
  },
});

export default LanguageSelectorModal;
