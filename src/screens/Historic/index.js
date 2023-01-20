import React, { useEffect, useContext } from 'react';
import { Container } from './styles';
import { Text } from 'react-native';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native';

export default () => {
   
    const navigation = useNavigation();

    return (
        <Container>
            <Header title="Histórico" navigation={navigation} />
           <Text>Histórico</Text>      
        </Container>
    );
}