import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ViewItem,
  TextItem,
  Opcoes,
  StyledTouchableOpacity,
} from '../stacks/styles';

const MainDrawer = props => {
  return (
    <Container>
      <ViewItem>
        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Preload')}>
          <Opcoes>
            <MaterialIcons name="refresh" size={28} style={{color: 'white'}} />
            <TextItem>Preload</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('SignIn')}>
          <Opcoes>
            <MaterialIcons name="login" size={28} style={{color: 'white'}} />
            <TextItem>SignIn</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('NewDevice')}>
          <Opcoes>
            <MaterialIcons name="add" size={28} style={{color: 'white'}} />
            <TextItem>New Device</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}>
          <Opcoes>
            <MaterialIcons
              name="person-add"
              size={28}
              style={{color: 'white'}}
            />
            <TextItem>SignUp</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Historic')}>
          <Opcoes>
            <MaterialIcons name="favorite" size={28} style={{color: 'white'}} />
            <TextItem>Historic</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}>
          <Opcoes>
            <MaterialIcons name="person" size={28} style={{color: 'white'}} />
            <TextItem>Profile</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          onPress={() => props.navigation.navigate('Home')}>
          <Opcoes>
            <MaterialIcons name="home" size={28} style={{color: 'white'}} />
            <TextItem>Home</TextItem>
          </Opcoes>
        </StyledTouchableOpacity>
      </ViewItem>
    </Container>
  );
};

export default MainDrawer;
