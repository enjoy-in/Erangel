import React from 'react';
import * as S from './style';

import background from '../../assets/background.png';
import Search from '../../components/Main/Search';


const Main = () => {
    return (
        <div>
            <img src={background} alt='메인페이지 배경사진' width="100%"/>
            <S.Title>단체 예약이 어려워<br/>여행가기 힘들다면<br/>ENJOYIN</S.Title>
            <Search/>
        </div>
    );
};

export default Main;