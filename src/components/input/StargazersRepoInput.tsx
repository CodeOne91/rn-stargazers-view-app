import React from 'react';
import {TextInput} from 'react-native-paper';

interface StargazersRepoInputProps {
  repo: string;
  onChangeRepo: (text: string) => void;
}

const StargazersRepoInput: React.FC<StargazersRepoInputProps> = ({
  repo,
  onChangeRepo,
}) => {
  return (
    <TextInput
      placeholder="Repository"
      value={repo}
      onChangeText={onChangeRepo}
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    />
  );
};

export default StargazersRepoInput;
