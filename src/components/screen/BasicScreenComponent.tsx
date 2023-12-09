import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

interface BasicScreenComponentProps {
  children: ReactNode;
}

const BasicScreenComponent: React.FC<BasicScreenComponentProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default BasicScreenComponent;
