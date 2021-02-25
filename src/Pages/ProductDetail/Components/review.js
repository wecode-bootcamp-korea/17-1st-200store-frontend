import React from 'react';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewDisplay: [],
    };
  }

  clickHandler = id => {
    if (this.state.reviewDisplay.includes(id)) {
      const newDisplayIds = this.state.reviewDisplay.filter(el => el !== id);
      this.setState({ reviewDisplay: newDisplayIds });
    } else {
      this.setState({ reviewDisplay: [...this.state.reviewDisplay, id] });
    }
  };

  render() {
    return (
      <>
        {this.props.reviewList.length === 0 && (
          <table className="qnaTableType">
            <tbody>
              <tr>
                <td className="noData">등록된 상품문의가 없습니다.</td>
              </tr>
            </tbody>
          </table>
        )}
        {this.props.reviewList.length > 0 && (
          <table className="reviewsTable">
            <tbody className="review_tbody">
              {this.props.reviewList.map(review => {
                const date = review.createAt.substring(0, 10);
                return (
                  <>
                    <tr className="reviewTr" id={review.id}>
                      <td className="reviewBox1" id="firstReviewBox">
                        <span className="star">
                          {Array(review.starRating + 1).join('★')}
                        </span>
                      </td>
                      <td className="reviewBox2">
                        <span onClick={() => this.clickHandler(review.id)}>
                          {review.content}
                        </span>
                      </td>
                      <td className="reviewBox1">
                        <span>{review.userId}</span>
                      </td>
                      <td className="reviewBox1">
                        <span>{date}</span>
                      </td>
                    </tr>
                    <tr
                      id={review.id}
                      className={
                        this.state.reviewDisplay.includes(review.id)
                          ? 'reviewTr2 height'
                          : 'reviewTr2 hideDisplay'
                      }
                    >
                      <td className="reviewBox1" id="firstReviewBox">
                        <span className="star"></span>
                      </td>
                      <td className="reviewBox2">
                        <span> {review.content} </span>
                      </td>
                      <td className="reviewBox1">
                        <span></span>
                      </td>
                      <td className="reviewBox1">
                        <span></span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  }
}

export default Reviews;
