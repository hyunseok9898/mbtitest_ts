import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import gureum from '../assets/구름이.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 30pt;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
`;

export const MainPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/question');
  };
  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentsWrapper>
          <Title>나에게 맞는 주인님은?!</Title>
          <LogoImage>
            <Image
              className="rounded-circle"
              src={gureum}
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
          <Desc>내가 집사가 되서 고양이를 키운다면..?</Desc>
          <Button
            className="btn-danger"
            onClick={handleClickButton}
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
          >
            테스트 시작하기
          </Button>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
};

export default MainPage;
