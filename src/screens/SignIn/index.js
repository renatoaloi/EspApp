import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Action, ButtonSign, Header, H1} from './styles';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';
import db from '../../../db.json';

export default () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    buttonDisable: true,
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const handleSignClick = async () => {
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  };

  const handleMessageButtonClick = () => {
    navigation.navigate('Home');
  };

  const textEmail = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
        buttonDisable: true,
      });
    } else {
      setData({
        ...data,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };

  const handleValidEmail = val => {
    if (val.trim().length > 1) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
        buttonDisable: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <Header>
        <H1>LOGIN</H1>
        {/* ESPAÇO PARA TEXTO OU IMAGEM */}
      </Header>
      <Animatable.View animation="fadeInUpBig" style={[styleGlobal.footer]}>
        <ScrollView
          style={styleGlobal.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <Text style={styleGlobal.textSignIn}>E-mail</Text>
          <Action>
            <MaterialIcons name="phone" color={'black'} size={20} />
            <TextInput
              placeholder="Seu E-mail"
              style={styleGlobal.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => textEmail(val)}
              onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </Action>
          {data.isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styleGlobal.errorMsg}>Campo Obrigátorio</Text>
            </Animatable.View>
          )}

          <Text style={styleGlobal.textSignIn}>Senha</Text>
          <Action>
            <Feather name="lock" size={20} />
            <TextInput
              placeholder="Sua senha"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styleGlobal.textInputSignIn}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </Action>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft">
              <Text style={styleGlobal.errorMsg}>
                A senha deve conter pelo menos 6 caracteres.
              </Text>
            </Animatable.View>
          )}

          <ButtonSign>
            <TouchableOpacity
              disabled={!data.isValidEmail || !data.isValidPassword}
              style={styleGlobal.signIn}
              onPress={() => {
                handleSignClick();
              }}>
              <LinearGradient
                colors={
                  !data.isValidEmail || !data.isValidPassword
                    ? ['#8a92a8', '#8a92a8']
                    : [db.theme.colors.statuBar, db.theme.colors.statuBar]
                }
                style={styleGlobal.signIn}>
                <Text style={styleGlobal.textBtnSignIn}>Entrar</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleMessageButtonClick()}
              style={[styleGlobal.signIn, styleGlobal.signInColor]}>
              <Text style={styleGlobal.textBtnSignUp}>Cadastrar</Text>
            </TouchableOpacity>
          </ButtonSign>
        </ScrollView>
      </Animatable.View>
    </Container>
  );
};
