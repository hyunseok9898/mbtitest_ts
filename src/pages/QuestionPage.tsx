import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../stores/Question/QuestionData';
import Header from '../components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
  font-family: 'Jalnan';
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 25pt;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  button {
    font-size: 18pt;
  }
`;

export default function QuestionPage(): React.ReactElement {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    {
      id: 'EI',
      score: 0,
    },
    {
      id: 'SN',
      score: 0,
    },
    {
      id: 'TF',
      score: 0,
    },
    {
      id: 'JP',
      score: 0,
    },
  ]);

  const handleClickAnswer = (ans: number, type: string) => {
    const next = questionNo + 1;

    const newScore = totalScore.map(item =>
      item.id === type ? { ...item, score: item.score + ans } : item,
    );
    setTotalScore(newScore);
    console.log('newScore', newScore);

    if (QuestionData.length !== next) {
      setQuestionNo(next);
    } else {
      const mbit = newScore.reduce(
        (acc, cur) =>
          acc +
          (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2)),
        '',
      );
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbit,
        })}`,
      });
    }
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{
              marginRight: '20px',
              width: '45%',
              minHeight: '200px',
              fontSize: '15px',
            }}
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            className="btn-warning"
            style={{
              width: '45%',
              minHeight: '200px',
              fontSize: '15px',
            }}
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}
