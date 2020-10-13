import styled from 'styled-components/native';

export const Schedule = styled.TouchableOpacity`
    padding: 20px;
    border-style: solid;
    border-color: #141b2b;
    border-bottom-width: 1px;
`;

export const Date = styled.Text`
    font-size: 14px;
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    color: ${props => props.completed ? "#ccc" : "#fff"};
`;

export const Service = styled.Text`
    color: ${props => props.completed ? "#ccc" : "#fff"};
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    font-size: 16px;
    font-weight: bold;
`;

export const ClientName = styled.Text`
    color: #ccc;
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    font-size: 12px;
    font-style: italic;
`