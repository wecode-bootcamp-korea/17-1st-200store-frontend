import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="reactModal">
        <div className="reactModalContentWarp">
          <div className="reviewModal">
            <div className="reviewModalTitle">
              리뷰쓰기{' '}
              <button type="button" classNAme="reviewModalClose">
                X
              </button>
            </div>
            <div className="reviewModalPointExplain"></div>
            <form className="reviewModalForm"></form>
            <div className="reviewModalExplain"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
