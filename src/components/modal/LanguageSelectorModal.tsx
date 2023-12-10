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
import {Button} from 'react-native-paper';

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

  useEffect(() => {
    try {
      i18n.reloadResources();
    } catch (e) {
      console.log(e);
    }
  }, [language]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleModalPress = (event: React.MouseEvent<View, MouseEvent>) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const handleLanguagePress = (selectedLanguage: {
    label: string;
    value: string;
  }) => {
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
                }}>
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
      <Button onPress={openModal} labelStyle={{fontSize: 18}}>
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
