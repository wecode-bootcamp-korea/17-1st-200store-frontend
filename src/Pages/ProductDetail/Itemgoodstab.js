import React from 'react';

class Itemgoodstab extends React.Component {
  render() {
    return (
      <div className="itemGoodsTab">
        <ul>
          <li>
            <a href="#detailInfo">상품상세정보</a>
          </li>
          <li>
            <a href="#delivery">배송안내</a>
          </li>
          <li>
            <a href="#exchange">교환 및 반품안내</a>
          </li>
          <li className="lastChild">
            <a href="#review">상품후기</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Itemgoodstab;
