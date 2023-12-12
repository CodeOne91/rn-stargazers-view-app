import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text, Divider} from 'react-native-paper';

import {Stargazer} from '../../../models/interface.ts';

interface StargazerItemProps {
  stargazer: Stargazer;
}

const StargazerItem: React.FC<StargazerItemProps> = ({stargazer}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Avatar.Image size={48} source={{uri: stargazer.avatar_url}} />
        <View style={styles.details}>
          <Text style={styles.username}>{stargazer.login}</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  details: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default StargazerItem;
