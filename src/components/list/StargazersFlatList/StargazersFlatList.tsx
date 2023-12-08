// StargazersFlatList.tsx
import React from 'react';
import {FlatList} from 'react-native';
import {Box, Heading} from 'native-base';
import StargazerItem from './StargazersItem.tsx';
import {Stargazer} from '../../../models/interface.ts';

interface StargazersFlatListProps {
  stargazersList: Stargazer[];
}

const StargazersFlatList: React.FC<StargazersFlatListProps> = ({
  stargazersList,
}) => (
  <Box>
    <Heading fontSize="xl" p="4" pb="3">
      Header
    </Heading>
    <FlatList
      data={stargazersList}
      renderItem={({item}) => <StargazerItem stargazer={item} />}
      keyExtractor={item => item.login}
    />
  </Box>
);

export default StargazersFlatList;
