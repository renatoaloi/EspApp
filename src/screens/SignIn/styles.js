import db from '../../../db.json'
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${db.theme.colors.primary};
    flex: 1;
`;

export const Header = styled.View`
   justify-content: flex-end;
   margin: 50px auto 0 auto;
   padding-bottom: 50px;
`;

export const Action = styled.View`
    flex-direction: row;
    margin-top: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #f2f2f2;
`;
export const ButtonSign = styled.View`
    align-items: center;
    margin-top: 50px;
`;
export const H1 = styled.Text`
    align-items: center;
    font-size:35px;
    color: #FFFFFF;
`;



