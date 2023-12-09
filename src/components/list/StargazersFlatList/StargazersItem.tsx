import React from 'react';
import {View} from 'react-native';
import {Avatar, Text, Divider} from 'react-native-paper';

import {Stargazer} from '../../../models/interface.ts';

interface StargazerItemProps {
  stargazer: Stargazer;
}

const StargazerItem: React.FC<StargazerItemProps> = ({stargazer}) => (
  <View style={{borderBottomWidth: 1}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
      }}>
      <Avatar.Image size={48} source={{uri: stargazer.avatar_url}} />
      <View style={{flex: 1, marginLeft: 8, justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{stargazer.login}</Text>
      </View>
    </View>
    <Divider />
  </View>
);

export default StargazerItem;
