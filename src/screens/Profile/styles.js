import styled from 'styled-components/native';
import db from '../../../db.json';

export const PrimaryText = styled.Text`
  font-size: 28px;
  color: ${db.theme.colors.primary};
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
