import React from 'react';
import {ScrollView, View} from 'react-native';
import {List, Title} from 'react-native-paper';

import {Stargazer} from '../../../models/interface.ts';
import StargazerItem from './StargazersItem.tsx';

interface StargazersFlatListProps {
  stargazersList: Stargazer[];
}

const StargazersFlatList: React.FC<StargazersFlatListProps> = ({
  stargazersList,
}) => (
  <ScrollView>
    <View>
      <Title style={{padding: 16}}>Header</Title>
      <List.Section>
        {stargazersList.map(item => (
          <StargazerItem key={item.login} stargazer={item} />
        ))}
      </List.Section>
    </View>
  </ScrollView>
);

export default StargazersFlatList;
