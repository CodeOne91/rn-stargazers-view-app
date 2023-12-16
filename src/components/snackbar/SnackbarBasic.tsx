import React from 'react';
import {Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {hideSnackbar} from '../../store/reducers/snackbarContextSlice.ts';
import {useTranslation} from 'react-i18next';

// This is snackbar visible in all app in order to notify with redux important message
const SnackbarBasic: React.FC = () => {
  const {open, error, message, isError} = useSelector(
    (state: any) => state.snackbarContext,
  );
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      visible={open}
      onDismiss={handleClose}
      action={{
        label: t('common:close'),
        onPress: handleClose,
      }}>
      {isError ? t(`common:error${error?.status}`) : message}
    </Snackbar>
  );
};

export default SnackbarBasic;
