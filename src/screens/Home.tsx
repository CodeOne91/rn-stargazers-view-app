import React, {useState} from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

import {Repository} from '../models/interface';
import useStargazers from '../hooks/useStargazers';
import {useSelector} from 'react-redux';
import StargazersOwnerInput from '../components/input/StargazersOwnerInput.tsx';
import StargazersRepoInput from '../components/input/StargazersRepoInput.tsx';
import StargazersButton from '../components/CTA/SubmitStargazersButton.tsx';

interface Props {}

const StargazersList: React.FC<Props> = () => {
  const [owner, setOwner] = useState('doublesymmetry');
  const [repo, setRepo] = useState('react-native-track-player');
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
      <StargazersOwnerInput owner={owner} onChangeOwner={setOwner} />
      <StargazersRepoInput repo={repo} onChangeRepo={setRepo} />
      <StargazersButton onPress={handleFetchStargazers} />
      {stargazersList.length > 0 && (
        <FlatList
          data={stargazersList}
          keyExtractor={item => item.login}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Image
                source={{uri: item.avatar_url}}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <Text>{item.login}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default StargazersList;
