import React from 'react';
import {View, Input} from 'native-base';

interface StargazersOwnerInputProps {
  owner: string;
  onChangeOwner: (text: string) => void;
}

const StargazersOwnerInput: React.FC<StargazersOwnerInputProps> = ({
  owner,
  onChangeOwner,
}) => {
  return (
    <View style={{marginBottom: 10}}>
      <Input
        placeholder="Owner"
        value={owner}
        onChangeText={onChangeOwner}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
    </View>
  );
};

export default StargazersOwnerInput;
