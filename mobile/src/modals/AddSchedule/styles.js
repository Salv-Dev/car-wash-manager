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

export const ClientInput = styled.View``;

export const TitleInput = styled.Text`
    font-size: 12px;
    margin-bottom: -10px;
    color: #8a8a8a;
`;

export const DateInput = styled.View``;

export const SelectDate = styled.TouchableOpacity`
    padding: 10px;
    margin-top: 5px;
`;

export const TextDate = styled.Text`
    color: ${props => props.isDate ? "#303030" : "#bd4040"};
`;

export const Services = styled.View`
    margin: 5px 0 35px 0;
`;

export const Title = styled.Text`
    font-size: 12px;
    margin-bottom: 5px;
    color: #8a8a8a;
`

export const SendButton = styled.TouchableOpacity`
    background-color: #1cade8;
    padding: 10px 0;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`