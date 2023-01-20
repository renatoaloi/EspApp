import React from 'react';
import { Container } from './styles';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'

export default () => {

    const navigation = useNavigation();

    return (

        <Container>
             <Header title="Home" navigation={navigation} />
            <View>
                <Text>Home</Text>
            </View>
        </Container>
    );
}