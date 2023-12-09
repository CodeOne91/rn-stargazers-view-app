import React from 'react';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';
import StargazersContainer from '../container/StargazersContainer.tsx';

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <BasicScreenComponent>
      <StargazersContainer />
    </BasicScreenComponent>
  );
};

export default HomeScreen;
