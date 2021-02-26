import React from 'react';
import MyPageHeader from './Components/Header/MyPageHeader';
import MyPageAside from './Components/Aside/MyPageAside';
import ProductLike from './ProductLike';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import CurrentOrder from './Components/CurrentOrder/CurrentOrder';
// import Coupon from '../../Coupon';
// import Point from '../../Point';
// import PersonalInquiry from '../../PersonalInquiry';
// import ChangeUserInfo from '../../ChangeUserInfo';
// import Address from '../../Address';
// import ProductInquiry from '../../ProductInquiry';
// import MyReview from '../../MyReview';
import './MyPage.scss';

export default class MyPage extends React.Component {
  state = {
    currentId: 10,
  };

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
    return (
      <div className="MyPage">
        <MyPageAside clickHandler={this.clickHandler} />
        <main className="mainPageArticle">
          <MyPageHeader />
          {MAPPING_OBJ[this.state.currentId]}
        </main>
      </div>
    );
  }
}

const MAPPING_OBJ = {
  10: <CurrentOrder />,
  11: <OrderHistory />,
  12: <ProductLike />,
  // 13: <Coupon />,
  // 14: <Point />,
  // 21: <PersonalInquiry />,
  // 22: <ChangeUserInfo />,
  // 23: <Address />,
  // 24: <ProductInquiry />,
  // 25: <MyReview />,
};
