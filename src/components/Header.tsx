import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import { QuestionData } from '../stores/Question/QuestionData';

interface Props {
  type: string;
  questionNo: number;
}

const ProgressWrapper = styled.div`
  font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
  padding: 20px 20px 20px 20px;
`;

const TitleWrapper = styled.div`
  background: #ffa07a;
  font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
`;

export default function Header(props: Props) {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          <ProgressBar
            now={Math.round((props.questionNo / QuestionData.length) * 100)}
            label={`${Math.round((props.questionNo / QuestionData.length) * 100)}%`}
            style={{ width: '100%', height: '30px' }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper>😻 예비집사 판별기 😻</TitleWrapper>
      )}
    </>
  );
}
