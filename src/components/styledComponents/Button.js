import styled from 'styled-components';

export const Button = styled.button`
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
background: ${props => props.primary ? 'blue' : 'gray'};
`;