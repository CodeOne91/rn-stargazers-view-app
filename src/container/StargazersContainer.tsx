import React, {useState} from 'react';
import {StyleSheet, View, Modal, Pressable} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';

import {Repository} from '../models/interface';
import useStargazers from '../hooks/useStargazers';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import StargazersList from '../components/list/StargazersFlatList/StargazersList.tsx';
import StargazersOwnerInput from '../components/input/StargazersOwnerInput.tsx';
import StargazersRepoInput from '../components/input/StargazersRepoInput.tsx';
import {clearStargazers} from '../store/reducers/stargazersSlice.ts';

interface Props {}

const StargazersContainer: React.FC<Props> = () => {
  const [owner, setOwner] = useState('pagopa');
  const [repo, setRepo] = useState('io-app');
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();

  const stargazersList = useSelector(
    (state: any) => state.stargazersList.value,
  );
  const {fetchStargazers} = useStargazers();

  const handleFetchStargazers = () => {
    const repository: Repository = {
      owner: owner,
      name: repo,
    };
    fetchStargazers(repository);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <StargazersOwnerInput owner={owner} onChangeOwner={setOwner} />
        <StargazersRepoInput repo={repo} onChangeRepo={setRepo} />
        <Button
          mode="contained"
          onPress={() => {
            handleFetchStargazers();
            setModalVisible(true);
          }}
          style={styles.searchButton}
          labelStyle={styles.searchButtonText}>
          {t('common:search')}
        </Button>
      </View>
      {stargazersList.length > 0 && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={[
              styles.modalContainer,
              {backgroundColor: theme.colors.background},
            ]}>
            <View style={styles.modalContent}>
              <StargazersList stargazersList={stargazersList} />
              <Button
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  dispatch(clearStargazers());
                }}>
                Close
              </Button>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  searchButton: {
    marginTop: 16,
  },
  searchButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxHeight: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default StargazersContainer;
