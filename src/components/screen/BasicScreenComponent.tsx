import React, {ReactNode} from 'react';
import {View} from 'react-native';

interface BasicScreenComponentProps {
  children: ReactNode;
}

const BasicScreenComponent: React.FC<BasicScreenComponentProps> = ({
  children,
}) => {
  return <View style={{padding: 10}}>{children}</View>;
};

export default BasicScreenComponent;
