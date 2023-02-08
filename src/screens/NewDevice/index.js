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
import TcpSocket from 'react-native-tcp-socket';

export default () => {
  const port = 124;
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
    const client = TcpSocket.createConnection(options, () => {
      console.log('Trying to connect...');
      client.destroy();
    });

    client.on('error', function (error) {
      console.log(error);
    });

    client.on('connect', function () {
      setFoundIpList([
        ...foundIpList,
        {
          host: options.host,
        },
      ]);
      console.log('Conectou!');
    });
  }

  function connectAndHandShake(options) {
    const client = TcpSocket.createConnection(options, () => {
      console.log('Write on the socket6');
      client.write('SYN', 'ascii');
    });

    client.on('data', function (data) {
      console.log('message was received', data);
      var buffer = {
        data: data.toString(),
      };
      console.log('data.data', buffer.data);
      if (buffer.data === 'SYN-ACK') {
        client.end('ACK', 'ascii');
        setFoundEspList([
          ...foundEspList,
          {
            host: options.host,
            name: 'Unknown ESP8266',
          },
        ]);
      } else {
        client.end('NACK', 'ascii');
      }
      if (options.host === '192.168.0.255') {
        setLoading(false);
      }
    });

    client.on('error', function (error) {
      console.log(error);
    });

    client.on('close', function () {
      console.log('Connection closed!');
    });
  }

  function botaoPressionado() {
    setLoading(true);
    for (var i = 1; i < 255; i++) {
      const options = {
        port: port,
        host: '192.168.0.' + (i + 1),
        localAddress: '0.0.0.0',
        reuseAddress: true,
      };
      //connectAndHandShake(options);
      tryToConnect(options);
    }
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
