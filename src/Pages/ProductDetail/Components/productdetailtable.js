import React from 'react';

class ProductdetailTable extends React.Component {
  render() {
    return (
      <table className="leftTableType">
        <tbody>
          <tr>
            <th>품명</th>
            <td colspan="3">을지로에서 만든 쟁반</td>
          </tr>
          <tr>
            <th>재질</th>
            <td colspan="3">스테인레스</td>
          </tr>
          <tr>
            <th>구성품</th>
            <td colspan="3">쟁반, 품질보증서</td>
          </tr>
          <tr>
            <th>크기</th>
            <td colspan="3">32.5x32.5cm</td>
          </tr>
          <tr>
            <th>제조사</th>
            <td colspan="3">(주)우아한형제들</td>
          </tr>
          <tr>
            <th>제조국</th>
            <td colspan="3">한국</td>
          </tr>
          <tr>
            <th>식품위생법에 따른 수입신고</th>
            <td colspan="3">해당없음</td>
          </tr>
          <tr>
            <th>품명</th>
            <td colspan="3">을지로에서 만든 쟁반</td>
          </tr>
          <tr>
            <th>품질보증기준</th>
            <td colspan="3">관련 법 및 소비자 분쟁해결 규정에 따름</td>
          </tr>
          <tr>
            <th>A/S 책임자와 전화번호</th>
            <td colspan="3">배민문방구 고객센터 1670-9902</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ProductdetailTable;
