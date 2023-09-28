import styled from 'styled-components'

export const FeedbackList = styled.ul`
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
`;

export const FeedbackItem = styled.li`
width: 100%;
`;
export const FeedbackBtn = styled.button`
    font-size: 20px;
    padding: 20px;
    background-color: ${props =>
    props.option === 'good'
      ? '#28a745'
      : props.option === 'neutral'
      ? '#ffc107'
      : '#dc3545'};
    color: rgb(255, 255, 255);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
 `;

export const FeedbackSection = styled.section`
  width: 400px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 5px;
  background-color: rgb(249, 249, 249);
  align-content: center;
  text-align: center;
 `


