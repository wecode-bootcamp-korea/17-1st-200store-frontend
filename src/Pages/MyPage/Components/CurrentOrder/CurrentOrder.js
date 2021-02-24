import React, { Component } from 'react';
import './CurrentOrder.scss';
class CurrentOrder extends Component {
  render() {
    return (
      <div className="CurrentOrder">
        <section>
          <article>
            <h2>입금대기</h2>
            <h3>0</h3>
          </article>
          <article>
            <h2>결제완료</h2>
            <h3>0</h3>
          </article>
          <article>
            <h2>상품준비중</h2>
            <h3>0</h3>
          </article>
          <article>
            <h2>배송중</h2>
            <h3>0</h3>
          </article>
          <article>
            <h2>배송완료</h2>
            <h3>0</h3>
          </article>
          <article>
            <h2>구매확정</h2>
            <h3>0</h3>
          </article>
        </section>
        <aside>
          <div className="cancel">
            <li>취소</li>
            <p>0건</p>
          </div>
          <div className="cancel">
            <li>교환</li>
            <p>0건</p>
          </div>
          <div className="cancel">
            <li>환불</li>
            <p>0건</p>
          </div>
        </aside>
      </div>
    );
  }
}

export default CurrentOrder;
