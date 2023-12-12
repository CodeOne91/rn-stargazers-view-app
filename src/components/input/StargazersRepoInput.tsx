import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

interface StargazersRepoInputProps {
  repo: string;
  onChangeRepo: (text: string) => void;
}

const StargazersRepoInput: React.FC<StargazersRepoInputProps> = ({
  repo,
  onChangeRepo,
}) => {
  const {t} = useTranslation();
  const theme = useTheme();

  return (
    <TextInput
      label={t('common:repository')}
      placeholder={t('common:repositoryPlaceholder')}
      mode={'outlined'}
      value={repo}
      onChangeText={onChangeRepo}
      style={[
        styles.input,
        {
          backgroundColor: theme.colors.onPrimary,
          borderColor: theme.colors.primary,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
    borderRadius: 10,
  },
});

export default StargazersRepoInput;
