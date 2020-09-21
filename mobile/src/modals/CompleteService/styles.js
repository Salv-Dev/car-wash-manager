import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    background-color: #ccc;
`;

export const TitleForm = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #303030;
`;

export const TitleDelete = styled(TitleForm)`
    font-size: 14px;
    color: #707070;
`;

export const ContainerBtn = styled.View`
    align-items: center;
    margin: 10px 0;
`;

export const BtnCheck = styled.TouchableOpacity`
    width: 80%;
    align-items: center;
    padding: 20px 10px;
    margin: 10px 5px 5px 5px;
    background-color: #41c489;
`;

export const BtnDelete = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 15px 5px 0 5px;
`;