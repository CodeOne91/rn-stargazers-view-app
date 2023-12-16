import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

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
  // State declarations
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true); // New state

  // Hooks and Redux setup
  const {t} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const stargazersList = useSelector(
    (state: any) => state.stargazersList.value,
  );
  const {fetchStargazers, hasMoreStargazers} = useStargazers();

  // Effect to update search button disabled state based on owner and repo changes
  useEffect(() => {
    setIsSearchButtonDisabled(!owner || !repo);
  }, [owner, repo]);

  // Function to fetch stargazers
  const handleFetchStargazers = () => {
    const repository: Repository = {
      owner: owner,
      name: repo,
    };
    fetchStargazers(repository);
  };

  // Function to handle loading more stargazers
  const handleLoadMore = () => {
    fetchStargazers(
      {
        owner: owner,
        name: repo,
      },
      false,
    );
  };

  // Rendered component
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Owner input component */}
        <StargazersOwnerInput owner={owner} onChangeOwner={setOwner} />
        {/* Repository input component */}
        <StargazersRepoInput repo={repo} onChangeRepo={setRepo} />
        {/* Search button */}
        <Button
          mode="contained"
          onPress={() => {
            handleFetchStargazers();
            setModalVisible(true);
          }}
          disabled={isSearchButtonDisabled}
          style={styles.searchButton}
          labelStyle={styles.searchButtonText}>
          {t('common:search')}
        </Button>
      </View>
      {/* Modal for displaying stargazers list */}
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
              {/* Stargazers list component */}
              <StargazersList stargazersList={stargazersList} />
              {/* Load more button */}
              {hasMoreStargazers && (
                <Button
                  mode={'contained'}
                  style={styles.modalButton}
                  onPress={handleLoadMore}>
                  {t('common:loadMore')}
                </Button>
              )}
              {/* Close modal button */}
              <Button
                mode={'outlined'}
                style={styles.modalButton}
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

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
    position: 'relative',
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
  modalButton: {
    marginTop: 10,
    alignItems: 'center',
  },
});

// Exporting the component
export default StargazersContainer;
