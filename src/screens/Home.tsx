import React from 'react';
import BasicScreenComponent from '../components/screen/BasicScreenComponent.tsx';
import StargazersContainer from '../container/StargazersContainer.tsx';

interface Props {}

const StargazersList: React.FC<Props> = () => {
  return (
    <BasicScreenComponent>
      <StargazersContainer />
    </BasicScreenComponent>
  );
};

export default StargazersList;
