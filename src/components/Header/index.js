import React from 'react';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import { StatusBar } from 'react-native';
import db from '../../../db.json'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default ({ title, navigation }) => {

    return (

        <Header style={{ backgroundColor: db.theme.colors.statuBar }}>
            <StatusBar backgroundColor={db.theme.colors.statuBar} barStyle="light-content" />
            <Left>
                <Button transparent onPress={() => navigation.openDrawer()}>
                    <FontAwesome
                        name="bars"
                        size={20}
                        style={{ color: '#ffff' }}
                    />
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right />
        </Header>
    );
}