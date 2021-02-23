import React from 'react';
import Reviews from './Components/review';
import AdminMsg from './Components/admin_msg';
import Itemgoodstab from './Components/Itemgoodstab';
import ProductdetailTable from './Components/productdetailtable';
// import Modal from './Modal';
import ItemPhotoInfoSec from './Components/itemphotoinfosec';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      isModalView: false,
      productDetail: [],
      productImage: [],
      productReview: [],
    };
  }

  handleModal = () => {
    this.setState({ isModalView: !this.state.isModalView });
  };

  componentDidMount() {
    // fetch('http://10.58.2.240:8000/product/goods_view/1', { method: 'GET' })
    fetch('/data/productdetaildata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productDetail: data.data.product,
          productImage: data.data.images,
          productReview: data.data.review,
        });
      });
  }

  countUp = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  countDown = () => {
    const { count } = this.state;
    this.setState({
      count: count === 0 ? count : count - 1,
    });
  };

  countZero = () => {
    this.setState({
      count: 0,
    });
  };

  goToHeart = () => {
    fetch('http://10.58.0.63:8000/product/product_like', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: this.state.productDetail[0].id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        result.message === 'SUCCESS'
          ? this.props.history.push('/mypage')
          : this.props.history.push('/login');
      });
  };

  goToCart = () => {
    fetch('http://10.58.5.199:8000/order/cart', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: this.state.productDetail[0].id,
        totalPrice:
          this.state.count *
          Math.round(
            (this.state.productDetail[0].price *
              (1 - this.state.productDetail[0].sale)) /
              100
          ) *
          100,
        quantity: this.state.count,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'SUCCESS'
          ? this.props.history.push('/cart')
          : this.props.history.push('/login')
      );
  };

  goToPayment = () => {
    fetch('http://10.58.5.199:8000/order/cart', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: this.state.productDetail[0].id,
        totalPrice: this.state.count * this.state.productDetail[0].price,
        quantity: this.state.count,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'SUCCESS'
          ? this.props.history.push('/payment')
          : this.props.history.push('/login')
      );
  };

  render() {
    return (
      <div className="productDetail">
        <div className="contents">
          <ItemPhotoInfoSec
            productDetail={this.state.productDetail}
            countUp={this.countUp}
            countDown={this.countDown}
            countZero={this.countZero}
            goToCart={this.goToCart}
            goToPayment={this.goToPayment}
            count={this.state.count}
            goToHeart={this.goToHeart}
          />
          <div className="detail">
            <Itemgoodstab />
            {this.state.productImage.map(image => {
              return (
                <div className="detailCont" id="detailInfo">
                  <h3 className="mustInfo">상품상세정보</h3>
                  <div className="detailExplainBox " id={image.id}>
                    <div className="detailPhotoBox" />
                    <img src={image.imageUrl} alt="사진" />
                    <div className="detailInfo">
                      <h3 className="mustInfo">상품필수정보</h3>
                      <ProductdetailTable />
                    </div>

                    <Itemgoodstab />
                    <h3 className="info" id="delivery">
                      배송안내
                    </h3>
                    <div className="adminMsg">
                      <p>배송사:cj대한통운</p>
                      <p>배송비: 2,500원(3만원 이상 구매 시 무료배송)</p>
                      <p>도서, 산간 일부지역은 배송비가 추가될 수 있습니다.</p>
                      <p>
                        배송기간: 오후 2시 이전 결제완료시 당일 출고 (영업일
                        기준)
                      </p>
                      <p>
                        단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이
                        추가로 소요될 수 있는 점 양해 부탁드립니다.
                      </p>
                    </div>
                    <Itemgoodstab />
                    <AdminMsg />
                    <Itemgoodstab />
                    <div className="productReview">
                      <div className="reviewBox">
                        <h3 id="review" className="review">
                          상품후기&nbsp;
                          <span className="reviewCount">
                            {this.state.productReview.length}
                          </span>
                        </h3>
                      </div>

                      <Reviews reviewList={this.state.productReview} />
                      <div className="page">
                        <ul>
                          <li className="on">
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
