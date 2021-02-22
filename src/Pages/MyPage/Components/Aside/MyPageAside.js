import React from 'react';
import MyPageMain from '../../MyPageMain';
import './MyPageAside.scss';

export default class MyPageHeader extends React.Component {
  render() {
    return (
      <aside className="MyPageAside">
        <h2 className="title">마이페이지</h2>
        <ul>
          {CATEGORY_ARR.map((category, idx1) => {
            return (
              <li className="subTitle" key={idx1}>
                {category.title}
                <ul>
                  {category.subCategory.map((subCategory, idx2) => {
                    return (
                      <li
                        className="subCategory"
                        key={idx2}
                        onClick={() =>
                          this.clickHandler((idx1 + 1) * 10 + idx2 + 1)
                        }
                      >
                        {subCategory}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}

const MAPPING_OBJ = {
  10: <MyPageMain />,
};

const CATEGORY_ARR = [
  {
    title: '쇼핑정보',
    subCategory: ['주문목록/배송조회', '찜리스트', '쿠폰함', '포인트'],
  },
  {
    title: '회원정보',
    subCategory: [
      '1:1 문의게시판',
      '회원정보 변경',
      '배송지 관리',
      '나의 상품문의',
      '나의 상품후기',
    ],
  },
];
