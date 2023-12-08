import React, {useState} from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

import {Repository} from '../models/interface';
import useStargazers from '../hooks/useStargazers';
import {useSelector} from 'react-redux';
import StargazersOwnerInput from '../components/input/StargazersOwnerInput.tsx';
import StargazersRepoInput from '../components/input/StargazersRepoInput.tsx';
import StargazersButton from '../components/CTA/SubmitStargazersButton.tsx';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';
import {VStack} from 'native-base';
import StargazersFlatList from '../components/list/StargazersFlatList/StargazersFlatList.tsx';

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
    <BasicScreenComponent>
      <VStack space={4} alignItems="center">
        <StargazersOwnerInput owner={owner} onChangeOwner={setOwner} />
        <StargazersRepoInput repo={repo} onChangeRepo={setRepo} />
        <StargazersButton onPress={handleFetchStargazers} />
      </VStack>
      {stargazersList.length > 0 && (
        <StargazersFlatList stargazersList={stargazersList} />
      )}
    </BasicScreenComponent>
  );
};

export default StargazersList;
