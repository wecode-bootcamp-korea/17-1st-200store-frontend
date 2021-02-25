import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Main from './Pages/Main/Main';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';
import MyPage from './Pages/MyPage/MyPage';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Main} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
