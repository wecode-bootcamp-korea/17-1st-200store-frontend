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
      <table className="reviewsTable">
        <tbody className="review_tbody">
          {this.props.reviewList.map(review => {
            return (
              <>
                <tr className="reviewTr" id={review.id}>
                  <td className="reviewBox1" id="firstReviewBox">
                    <span className="star">
                      {Array(review.star_rate + 1).join('★')}
                    </span>
                  </td>
                  <td className="reviewBox2">
                    <span onClick={() => this.clickHandler(review.id)}>
                      {review.comment}
                    </span>
                  </td>
                  <td className="reviewBox1">
                    <span>{review.name}</span>
                  </td>
                  <td className="reviewBox1">
                    <span>{review.date}</span>
                  </td>
                </tr>
                {/* <--display속성 none으로 주기--> */}
                <tr
                  className="reviewTr2"
                  id={review.id}
                  style={
                    this.state.reviewDisplay.includes(review.id)
                      ? { height: '109px' }
                      : { display: 'none' }
                  }
                >
                  <td className="reviewBox1" id="firstReviewBox">
                    <span className="star"></span>
                  </td>
                  <td className="reviewBox2">
                    <span> {review.comment} </span>
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
    );
  }
}

export default Reviews;
