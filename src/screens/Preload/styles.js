import styled from 'styled-components/native';
import db from '../../../db.json';

export const Container = styled.SafeAreaView`
  background-color: ${db.theme.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
