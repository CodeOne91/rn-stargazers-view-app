import React from 'react';
import {FlatList, View} from 'react-native';
import {Title} from 'react-native-paper';

import {Stargazer} from '../../../models/interface.ts';
import StargazerItem from './StargazersItem.tsx';

interface StargazersFlatListProps {
  stargazersList: Stargazer[];
}

const StargazersFlatList: React.FC<StargazersFlatListProps> = ({
  stargazersList,
}) => (
  <View>
    <Title style={{padding: 16}}>Header</Title>
    <FlatList
      data={stargazersList}
      renderItem={({item}) => <StargazerItem stargazer={item} />}
      keyExtractor={item => item.login}
    />
  </View>
);

export default StargazersFlatList;
