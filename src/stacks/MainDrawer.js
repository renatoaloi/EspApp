import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container, ViewItem, TextItem, Opcoes} from '../stacks/styles';

const MainDrawer = props => {
  return (
    <Container>
      <ViewItem>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Preload')
          }>
          <Opcoes>
            <MaterialIcons name="home" size={20} style={{color: 'white'}} />
            <TextItem>Preload</TextItem>
          </Opcoes>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Opcoes>
            <MaterialIcons name="home" size={20} style={{color: 'white'}} />
            <TextItem>SignIn</TextItem>
          </Opcoes>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Opcoes>
            <MaterialIcons name="home" size={20} style={{color: 'white'}} />
            <TextItem>SignUp</TextItem>
          </Opcoes>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('MainTab')}>
          <Opcoes>
            <MaterialIcons name="home" size={20} style={{color: 'white'}} />
            <TextItem>MainTab</TextItem>
          </Opcoes>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Historic')}>
          <Opcoes>
            <MaterialIcons name="home" size={20} style={{color: 'white'}} />
            <TextItem>Historic</TextItem>
          </Opcoes>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Opcoes>
            <MaterialIcons name="home" size={20} style={{color: 'white'}} />
            <TextItem>Home</TextItem>
          </Opcoes>
        </TouchableOpacity>
      </ViewItem>
    </Container>
  );
};

export default MainDrawer;
