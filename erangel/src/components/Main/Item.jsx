import React from 'react';
import * as S from './style/Item';


const Item = ({info}) => {
    return (
        <S.ItemWrapper>
            <S.Image/>
            <S.Name>
                <p>{info.name}</p>
            </S.Name>
            <S.Price>
                <S.MinPrice>최소 <p>{info.min}원~</p></S.MinPrice>
                <S.MaxPrice>최대 {info.max}원</S.MaxPrice>
            </S.Price>
        </S.ItemWrapper>
    );
};

export default Item;