import Style from './Top.module.css';
import React from 'react';

const Top = () => (
  <div>
    <div className={Style.container}>
      <p className={Style.subTitle}>
        気持ちを綴って、言葉でつながる
      </p>
      <h1 className={Style.mainTitle} >
        Journaling Share
      </h1>
      <h2 className={Style.message}>
        シンプルに、いまの気持ちをシェアする<br />
        ジャーナリングアプリ
      </h2>
    </div>
  </div>
);

export default Top;
