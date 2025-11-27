import React from 'react';

import { ResultData } from '../stores/Result/ResultData';

export default function ResultPage(): React.ReactElement {
  return <img src={ResultData[0].image} width={350} height={350} />;
}
