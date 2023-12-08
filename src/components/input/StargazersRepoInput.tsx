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
    <View style={{marginBottom: 10}}>
      <Input
        placeholder="Repository"
        value={repo}
        onChangeText={onChangeRepo}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
    </View>
  );
};

export default StargazersRepoInput;
