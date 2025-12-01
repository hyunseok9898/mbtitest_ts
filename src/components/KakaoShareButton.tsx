import { Button } from 'react-bootstrap';
import { IResult } from '../stores/Result/types';
import React from 'react';

interface Props {
  data: IResult;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton(props: Props) {
  const Kakao = window.Kakao;
  const url = 'https://mbtitest-ts-one.vercel.app/';
  const resultUrl = window.location.href;

  React.useEffect(() => {
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init('956eca165754dc86bc48aa213a0ff14d');
    }
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '😻 예비집사 판별기 결과😻',
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={shareKakao}
      className="btn-warning"
      style={{ width: 170, marginTop: 20 }}
    >
      공유하기
    </Button>
  );
}
