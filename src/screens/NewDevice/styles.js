import styled from 'styled-components/native';
import db from '../../../db.json';

export const ButtonView = styled.View`
  margin-top: 20px;
`;

export const PrimaryText = styled.Text`
  font-size: 28px;
  color: ${db.theme.colors.primary};
`;

export const SecondaryText = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: ${db.theme.colors.text};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${db.theme.colors.contrastText};
  border: 1px solid ${db.theme.colors.primary};
  background-color: ${db.theme.colors.primary};
`;

export const Container = styled.SafeAreaView`
  background-color: ${db.theme.colors.primary};
  flex: 1;
`;

export const H1 = styled.Text`
  align-items: center;
  font-size: 35px;
  color: #ffffff;
`;

export const Header = styled.View`
  justify-content: flex-end;
  margin: 50px auto 0 auto;
  padding-bottom: 50px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
  color: ${db.theme.colors.primary};
`;
