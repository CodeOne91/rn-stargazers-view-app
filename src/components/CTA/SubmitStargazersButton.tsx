import React from 'react';
import {Button, Text} from 'react-native-paper';

interface StargazersButtonProps {
  onPress: () => void;
}

const StargazersButton: React.FC<StargazersButtonProps> = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <Text>Visualizza Stargazers</Text>
    </Button>
  );
};

export default StargazersButton;
