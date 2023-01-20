import styled from 'styled-components/native';
import db from '../../../db.json'

export const Container = styled.SafeAreaView`
    background-color: ${db.theme.colors.primary};
    flex: 1;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const Header = styled.View`
    margin-top: 20px;
    justify-content: flex-end;
    padding-bottom: 50px;
`;
export const GoBack = styled.TouchableOpacity`
    margin-bottom:20px;
    padding-left: 20px;
    width: 60px;
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
    margin-bottom: 15px;
`;
export const H1 = styled.Text`
    text-align: center;
    font-size:35px;
    color: #FFFFFF;
`;

