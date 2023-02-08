import styled from 'styled-components/native';
import db from '../../db.json';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 10px;
`;

export const Container = styled.SafeAreaView`
  background-color: ${db.theme.colors.primary};
  flex: 1;
`;
export const ViewItem = styled.View`
  padding: 50px 10px 10px 10px;
  display: flex;
  width: 100%;
  flex: 1;
`;
export const TextItem = styled.Text`
  color: #fff;
  font-size: 18px;
  padding-left: 10px;
`;
export const Opcoes = styled.View`
  display: flex;
  flex-direction: row;
`;
