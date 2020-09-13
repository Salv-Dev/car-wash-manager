import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    background-color: #ccc;
`;

export const TitleForm = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #303030;
    margin-bottom: 15px;
`;

export const ContainerBtn = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const BtnCheck = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
    padding: 10px;
    margin: 5px 5px;
    background-color: #41c489;
`;

export const BtnClose = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
    padding: 10px;
    margin: 5px 5px;
    background-color: #e65050;
`;