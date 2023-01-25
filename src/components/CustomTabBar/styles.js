import styled from 'styled-components/native';
import db from '../../../db.json';

const TabArea = styled.View`
  height: 50px;
  background-color: ${db.theme.colors.primary};
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #00c28b;
  margin-top: -20px;
`;
