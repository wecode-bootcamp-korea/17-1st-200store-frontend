import React from 'react';

import MyPageMain from './MyPageMain';
import MyPageHeader from './Components/Header/MyPageHeader';
import MyPageAside from './Components/Aside/MyPageAside';

import './MyPage.scss';

export default class MyPage extends React.Component {
  state = {
    currentId: 10,
  };

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
    console.log(this.state.currentId);
    return (
      <div className="MyPage">
        <MyPageAside />
        <article>
          <MyPageHeader />
          <MyPageMain />
        </article>
      </div>
    );
  }
}
