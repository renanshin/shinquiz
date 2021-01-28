import styled from 'styled-components';

const QuizContainer = styled.div`
padding: 10px;
    border: 1px solid #660000;
    box-shadow:  -1px 1px #bbbbbb,
         -2px 2px #bbbbbb,
         -4px 3px #bbbbbb,
         -6px 4px #bbbbbb,
         -8px 5px #bbbbbb;
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  transform: rotate(-3deg);
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
