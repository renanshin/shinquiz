import styled from 'styled-components';

const QuizContainer = styled.div`

  padding: 10px 10px 0 10px;
  border: 2px solid #880000;
  box-shadow:  -1px 1px #777777,
        -2px 2px #777777,
        -4px 3px #777777,
        -6px 4px #777777,
        -8px 5px #777777;
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  transform: rotate(-3deg);
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px 15px 0 15px;
  }
`;

export default QuizContainer;
