import React from 'react';
import {View, Input, Flex} from 'native-base';

interface StargazersOwnerInputProps {
  owner: string;
  onChangeOwner: (text: string) => void;
}

const StargazersOwnerInput: React.FC<StargazersOwnerInputProps> = ({
  owner,
  onChangeOwner,
}) => {
  return (
    <Input
      placeholder="Owner"
      value={owner}
      onChangeText={onChangeOwner}
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    />
  );
};

export default StargazersOwnerInput;
