import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/reset.scss';
import './Styles/common.scss';
import './index.scss';
import Routes from './Routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
