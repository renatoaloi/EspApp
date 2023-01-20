import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, ViewItem, TextItem, Opcoes } from '../stacks/styles';

const MainDrawer = (props) => {

    return (
        <Container>
            <ViewItem>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('MainTab')}
                >
                    <Opcoes>
                        <MaterialIcons
                            name="home"
                            size={20}
                            style={{ color: 'white' }}
                        />
                        <TextItem>Home</TextItem>
                    </Opcoes>
                </TouchableOpacity>
            </ViewItem>
        </Container>

    )
}

export default MainDrawer;