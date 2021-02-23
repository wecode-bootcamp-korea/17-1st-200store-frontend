import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render() {
    return (
      <div className="ModalTop">
        <div className="reactModal">
          <div className="reactModalContentWarp">
            <div className="reviewModal">
              <div className="buttonreview">
                <button
                  onClick={this.props.writeReview}
                  type="button"
                  className="reviewModalClose"
                >
                  X
                </button>
              </div>
              <div className="reviewModalTitle">리뷰쓰기</div>
              <form className="reviewModalForm">
                <div className="reviewModalSection">별점 평가</div>
                <div className="reviewModalFormStarWrap">
                  <input type="radio" name="chk_info" value="★☆" />
                  ★
                  <input type="radio" name="chk_info" value="★★" />
                  ★★
                  <input type="radio" name="chk_info" value="★★★" />
                  ★★★
                  <input type="radio" name="chk_info" value="★★★★" />
                  ★★★★
                  <input type="radio" name="chk_info" value="★★★★★" />
                  ★★★★★
                </div>
              </form>
              <div className="reveiwModalSection">
                <div className="reviewModalSectionTitle">글제목</div>
                <input className="inputTitle" />
              </div>
              <div className="reveiwModalSection">
                <div className="reveiwModalSection">
                  <div className="reviewModalSectionComment">리뷰작성</div>
                  <textarea
                    placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다."
                    className="formControlTextModal"
                  ></textarea>
                </div>
                {/* <div className="reveiwModalSection">
                <div className="reviewModalSectionWriter">작성자</div>
                <input className="inputTitle" />
              </div>
              <div className="reveiwModalSection">
                <div className="reviewModalSectionDate">작성일</div>
                <input className="inputTitle" type="date" />
              </div> */}
                <button className="reviewBtn" type="Submit">
                  완료
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
