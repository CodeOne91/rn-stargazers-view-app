import React, {useState} from 'react';
import {View, Text, FlatList, Image, TextInput, Button} from 'react-native';
import {Repository} from '../models/interface';
import useStargazers from '../hooks/useStargazers';

interface Props {}

const StargazersList: React.FC<Props> = () => {
  const [owner, setOwner] = useState('doublesymmetry');
  const [repo, setRepo] = useState('react-native-track-player');

  const {stargazers, fetchStargazers} = useStargazers();

  const handleFetchStargazers = () => {
    const repository: Repository = {
      owner: owner,
      name: repo,
    };

    fetchStargazers(repository);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <TextInput
          placeholder="Owner"
          value={owner}
          onChangeText={text => setOwner(text)}
          style={{
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginRight: 10,
          }}
        />
        <TextInput
          placeholder="Repository"
          value={repo}
          onChangeText={text => setRepo(text)}
          style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
        />
      </View>
      <Button title="Visualizza Stargazersss" onPress={handleFetchStargazers} />
      {stargazers.length > 0 && (
        <FlatList
          data={stargazers}
          keyExtractor={item => item.login}
          renderItem={({item}) => (
            <View>
              <Image
                source={{uri: item.avatar_url}}
                style={{width: 50, height: 50}}
              />
              <Text>{item.login}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default StargazersList;
