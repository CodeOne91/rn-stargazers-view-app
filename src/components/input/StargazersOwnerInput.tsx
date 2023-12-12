import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

interface StargazersOwnerInputProps {
  owner: string;
  onChangeOwner: (text: string) => void;
}

const StargazersOwnerInput: React.FC<StargazersOwnerInputProps> = ({
  owner,
  onChangeOwner,
}) => {
  const {t} = useTranslation();
  const theme = useTheme();

  return (
    <TextInput
      label={t('common:owner')}
      mode={'outlined'}
      placeholder={t('common:ownerPlaceholder')}
      value={owner}
      onChangeText={onChangeOwner}
      style={[styles.input, {backgroundColor: theme.colors.onPrimary}]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
    borderRadius: 10,
  },
});

export default StargazersOwnerInput;
