import React, {useEffect} from 'react';
import { Container, LoadingIcon } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import db from '../../../db.json'

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }, []);

    return (
        <Container>
             <StatusBar backgroundColor={db.theme.colors.primary} barStyle="light-content" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}