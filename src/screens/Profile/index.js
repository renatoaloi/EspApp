import React from 'react';
import { Container } from './styles';
import { Text } from 'react-native';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native';

export default () => {
   
    const navigation = useNavigation();

    return (
        <Container>
            <Header title="Perfil" navigation={navigation} />
           <Text>Perfil</Text>      
        </Container>
    );
}