// StargazerItem.tsx
import React from 'react';
import {Box, HStack, VStack, Avatar, Text, Spacer} from 'native-base';
import {Stargazer} from '../../../models/interface.ts';

interface StargazerItemProps {
  stargazer: Stargazer;
}

const StargazerItem: React.FC<StargazerItemProps> = ({stargazer}) => (
  <Box borderBottomWidth="1">
    <HStack space={[2, 3]} justifyContent="space-between">
      <Avatar size="48px" source={{uri: stargazer.avatar_url}} />
      <VStack>
        <Text bold>{stargazer.login}</Text>
      </VStack>
      <Spacer />
    </HStack>
  </Box>
);

export default StargazerItem;
