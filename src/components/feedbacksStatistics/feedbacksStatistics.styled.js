import styled from 'styled-components'
export const StatesticSection = styled.section`
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    background-color: rgb(249, 249, 249);
    align-content: center;
    text-align: center;
`;

export const StatList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
margin: 0;
padding: 0;
gap: 10px;
width: 100%;
`;

export const StatItem = styled.li`
width: 100%;
`
export const StatText = styled.p`
    font-size: 20px;
    height: 100%;
    margin: 0;
    color: white;
    border-radius: 5px;
    padding: 15px;
    background-color: ${props =>
    props.type === 'good'
    ? '#28a745'
    : props.type === 'neutral'
    ? '#ffc107'
    : props.type === 'bad'
        ? '#dc3545'
    : 'black'};
`