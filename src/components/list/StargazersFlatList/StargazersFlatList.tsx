import React from 'react';
import {ScrollView, View} from 'react-native';
import {List, Title} from 'react-native-paper';

import {Stargazer} from '../../../models/interface.ts';
import StargazerItem from './StargazersItem.tsx';
import {useTranslation} from 'react-i18next';

interface StargazersFlatListProps {
  stargazersList: Stargazer[];
}

const StargazersFlatList: React.FC<StargazersFlatListProps> = ({
  stargazersList,
}) => {
  const {t} = useTranslation();

  return (
    <ScrollView>
      <View>
        <Title style={{alignSelf: 'center', padding: 16}}>
          {t('common:stargazersListTitle')}
        </Title>
        <List.Section>
          {stargazersList.map(item => (
            <StargazerItem key={item.login} stargazer={item} />
          ))}
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default StargazersFlatList;
