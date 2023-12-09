import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  TextInput,
  Divider,
  ActivityIndicator,
} from 'react-native-paper';

import {Repository} from '../models/interface';
import useStargazers from '../hooks/useStargazers';
import {useSelector} from 'react-redux';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';
import StargazersFlatList from '../components/list/StargazersFlatList/StargazersFlatList.tsx';

interface Props {}

const StargazersList: React.FC<Props> = () => {
  const [owner, setOwner] = useState('pagopa');
  const [repo, setRepo] = useState('io-app');
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
    <BasicScreenComponent>
      <TextInput
        label="Owner"
        value={owner}
        onChangeText={setOwner}
        style={styles.input}
      />
      <TextInput
        label="Repository"
        value={repo}
        onChangeText={setRepo}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleFetchStargazers}>
        Fetch Stargazers
      </Button>
      {/*{isLoading && <ActivityIndicator animating={true} />}*/}
      <Divider />
      {stargazersList.length > 0 && (
        <StargazersFlatList stargazersList={stargazersList} />
      )}
    </BasicScreenComponent>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
});

export default StargazersList;
