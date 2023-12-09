import React from 'react';
import {TextInput} from 'react-native-paper';

interface StargazersOwnerInputProps {
  owner: string;
  onChangeOwner: (text: string) => void;
}

const StargazersOwnerInput: React.FC<StargazersOwnerInputProps> = ({
  owner,
  onChangeOwner,
}) => {
  return (
    <TextInput
      placeholder="Owner"
      value={owner}
      onChangeText={onChangeOwner}
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    />
  );
};

export default StargazersOwnerInput;
