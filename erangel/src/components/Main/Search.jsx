import React from 'react';
import * as S from './style/Search';

import ItemList from '../../components/Main/ItemList';

const Search = () => {
    return (
        <S.SearchWrapper>
            <S.Box>
                <input placeholder="지역, 숙소명으로 검색할 수 있습니다." />
                <button>검 색</button>
            </S.Box>
            <S.Text>검색창에 숙소를 검색하세요</S.Text>
            <S.Line/>
            <ItemList />
        </S.SearchWrapper>
    );
};

export default Search;