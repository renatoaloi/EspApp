import React from 'react';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import db from '../../db.json'

const TabArea = styled.View`
    height: 50px;
    background-color: ${db.theme.colors.primary};
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #00C28B;
    margin-top: -20px;
`;

export default ({ navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Historic')}>
                <FontAwesome
                    name="history"
                    size={20}
                    style={{ color: 'white' }}
                />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Home')}>
                <MaterialIcons
                    name="home"
                    size={25}
                    style={{ color: db.theme.colors.primary }}
                />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Profile')}>
                <FontAwesome
                    name="user-circle"
                    size={20}
                    style={{ color: 'white' }}
                />
            </TabItem>
        </TabArea>
    );
}