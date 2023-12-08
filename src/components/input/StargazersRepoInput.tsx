import React from 'react';
import {View, Input} from 'native-base';

interface StargazersRepoInputProps {
  repo: string;
  onChangeRepo: (text: string) => void;
}

const StargazersRepoInput: React.FC<StargazersRepoInputProps> = ({
  repo,
  onChangeRepo,
}) => {
  return (
    <Input
      placeholder="Repository"
      value={repo}
      onChangeText={onChangeRepo}
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    />
  );
};

export default StargazersRepoInput;
