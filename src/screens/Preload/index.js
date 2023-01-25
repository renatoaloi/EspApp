import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  }, []);

  return (
    <Container>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
