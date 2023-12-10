import React from 'react';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';
import SettingsContainer from '../container/SettingsContainer.tsx';

interface Props {}

const SettingsScreen: React.FC<Props> = () => {
  return (
    <BasicScreenComponent>
      <SettingsContainer />
    </BasicScreenComponent>
  );
};

export default SettingsScreen;
