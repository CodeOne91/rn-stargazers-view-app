import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
    <>
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
      {/*{isLoading && <ActivityIndicator animating={true} />}*/}
      <Divider />
      {stargazersList.length > 0 && (
        <StargazersFlatList stargazersList={stargazersList} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
});

export default StargazersContainer;
