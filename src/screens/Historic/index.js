import React, {useEffect, useContext} from 'react';
import {ScrollView, Text, StatusBar} from 'react-native';
import {Container, Header, H1, PrimaryText} from './styles';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import styleGlobal from '../../styles/global';
import db from '../../../db.json';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <Header>
        <H1>HISTORIC</H1>
        {/* ESPAÇO PARA TEXTO OU IMAGEM */}
      </Header>
      <Animatable.View animation="fadeInUpBig" style={[styleGlobal.footer]}>
        <ScrollView
          style={styleGlobal.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <PrimaryText>Novo histórico</PrimaryText>
        </ScrollView>
      </Animatable.View>
    </Container>
  );
};
