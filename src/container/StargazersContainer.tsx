import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Button, TextInput, Divider} from 'react-native-paper';

import {Repository} from '../models/interface';
import useStargazers from '../hooks/useStargazers';
import {useSelector} from 'react-redux';
import StargazersFlatList from '../components/list/StargazersFlatList/StargazersFlatList.tsx';
import {useTranslation} from 'react-i18next';

interface Props {}

const StargazersContainer: React.FC<Props> = () => {
  const [owner, setOwner] = useState('pagopa');
  const [repo, setRepo] = useState('io-app');
  const {t} = useTranslation();

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
        <TextInput
          label={t('common:owner')}
          placeholder={t('common:ownerPlaceholder')}
          value={owner}
          onChangeText={setOwner}
          style={styles.input}
        />
        <TextInput
          label={t('common:repository')}
          placeholder={t('common:repositoryPlaceholder')}
          value={repo}
          onChangeText={setRepo}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleFetchStargazers}>
          {t('common:search')}
        </Button>
      </View>
      {stargazersList.length > 0 && (
        <StargazersFlatList stargazersList={stargazersList} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
});

export default StargazersContainer;
