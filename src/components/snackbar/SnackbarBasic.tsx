import React from 'react';
import {Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {hideSnackbar} from '../../store/reducers/SnackbarContextSlice.ts';
// This is snackbar visible in all app in order to notify with redux important message
const SnackbarBasic: React.FC = () => {
  const {open, message} = useSelector((state: any) => state.snackbarContext);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      visible={open}
      onDismiss={handleClose}
      action={{
        label: 'Close',
        onPress: handleClose,
      }}>
      {message}
    </Snackbar>
  );
};

export default SnackbarBasic;
