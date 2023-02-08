import React, {useState, useEffect} from 'react';
import {
  ButtonView,
  SecondaryText,
  Container,
  Header,
  H1,
  PrimaryText,
  LoadingIcon,
} from './styles';
import {
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';
import dgram from 'react-native-udp'

export default () => {
  const port = 12345;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [foundEspList, setFoundEspList] = useState([]);
  const [foundIpList, setFoundIpList] = useState([]);

  useEffect(() => {
    if (foundEspList.length > 0) {
      console.log('achei um esp8266 na rede!', foundEspList[-1]?.host);
    }
  }, [foundEspList]);

  useEffect(() => {
    if (foundIpList.length > 0) {
      console.log('achei um ip respondendo na rede!', foundIpList[-1]?.host);
    }
  }, [foundIpList]);

  function tryToConnect(options) {
    const socket = dgram.createSocket('udp4')
    socket.bind(options.port)
    socket.once('listening', function() {
      socket.send('Hello World!', undefined, undefined, options.port, options.host, function(err) {
        if (err) throw err
        console.log('Message sent!')
      })
    })

    socket.on('message', function(msg, rinfo) {
      console.log('Message received', msg)
    })
  }

  function botaoPressionado() {
    setLoading(true);
    const options = {
      port: port,
      host: '192.168.0.255',
      localAddress: '127.0.0.1',
      reuseAddress: true,
    };
    //connectAndHandShake(options);
    tryToConnect(options);
  }

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <Header>
        <H1>NEW DEVICE</H1>
        {/* ESPAÇO PARA TEXTO OU IMAGEM */}
      </Header>
      <Animatable.View animation="fadeInUpBig" style={[styleGlobal.footer]}>
        <ScrollView
          style={styleGlobal.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <PrimaryText>Encontre seu ESP8266!</PrimaryText>
          <SecondaryText>
            Clique no botão abaixo para pesquisar os ESP8266 pela rede!
          </SecondaryText>
          <ButtonView>
            {!loading && (
              <TouchableOpacity
                onPress={() => botaoPressionado()}
                style={[styleGlobal.signIn, styleGlobal.signInColor]}>
                <Text style={styleGlobal.textBtnSignUp}>Pesquisar</Text>
              </TouchableOpacity>
            )}
            {loading && (
              <LoadingIcon size="large" color={db.theme.colors.primary} />
            )}
          </ButtonView>
          <View>
            <Text style={{color: 'black', marginTop: 20}}>
              Aqui vai o retorno da consulta
            </Text>
          </View>
        </ScrollView>
      </Animatable.View>
    </Container>
  );
};
