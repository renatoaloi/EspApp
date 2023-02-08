import {StyleSheet, Dimensions} from 'react-native';
import db from '../../db.json';

const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  // ==== TELAS EM GERAL ==== //

  colorWhite: {
    color: '#ffff',
  },
  errorMsg: {
    color: db.theme.colors.wrong,
    fontSize: 14,
  },
  top: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // ==== FIM TELA EM GERAL ==== //

  // ==== HEADER ==== //

  bodyPadding: {
    paddingLeft: 10,
  },

  // ==== FIM HEADER ==== //

  // ==== TELA SignIn ==== //
  logoSignIn: {
    flex: 1,
    top: 30,
    width: 150,
    height: null,
    resizeMode: 'contain',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  scrollViewSignIn: {
    width: '100%',
    marginBottom: -25
  },
  textSignIn: {
    fontSize: 18,
    marginTop: 35,
    color: db.theme.colors.primary,
  },
  textBtnSignIn: {
    color: db.theme.colors.contrastText,
    fontSize: 18,
  },
  textBtnSignUp: {
    color: db.theme.colors.primary,
    fontSize: 18,
  },
  textInputSignIn: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: db.theme.colors.secondary,
    fontSize: 18,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 18,
  },
  signInColor: {
    borderColor: db.theme.colors.primary,
    borderWidth: 1,
    marginTop: 15,
  },
  // ==== FIM TELA SignIn ==== //

  // ==== HOME ==== //

  labelTitleHome: {
    paddingTop: 70,
  },

  // ==== FIM HOME ==== //

  // ==== RESULTADO CAPTURA ==== //
  photoResult: {
    height: 320,
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bg: {
    resizeMode: 'cover',
    height: DIMENSION_HEIGHT,
  },
  // ==== FIM RESULTADO CAPTURA === //
});
