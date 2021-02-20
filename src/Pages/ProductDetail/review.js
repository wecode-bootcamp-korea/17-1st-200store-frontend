import React from 'react';

class Reviews extends React.Component {
  state = {
    reviewDisplay: [],
  };

  clickHandler = id => {
    console.log(id, this.state.reviewDisplay);
    if (this.state.reviewDisplay.includes(id)) {
      const newDisplayIds = this.state.reviewDisplay.filter(el => el !== id);
      this.setState({ reviewDisplay: newDisplayIds });
    } else {
      this.setState({ reviewDisplay: [...this.state.reviewDisplay, id] });
    }
  };

  render() {
    return (
      <table className="reviews_table">
        <tbody className="review_tbody">
          {this.props.reviewList.map(review => {
            return (
              <>
                <tr className="review_tr" id={review.id}>
                  <td className="review_box1" id="first_review_box">
                    <span className="star">{review.star_rate}</span>
                  </td>
                  <td className="review_box2">
                    <span onClick={() => this.clickHandler(review.id)}>
                      {review.comment}
                    </span>
                  </td>
                  <td className="review_box1">
                    <span>{review.name}</span>
                  </td>
                  <td className="review_box1">
                    <span>{review.date}</span>
                  </td>
                </tr>
                {/* <--display속성 none으로 주기--> */}
                <tr
                  className="review_tr2"
                  id={review.id}
                  style={
                    this.state.reviewDisplay.includes(review.id)
                      ? { height: '109px' }
                      : { display: 'none' }
                  }
                >
                  <td className="review_box1" id="first_review_box">
                    <span className="star"></span>
                  </td>
                  <td className="review_box2">
                    <span> {review.comment} </span>
                  </td>
                  <td className="review_box1">
                    <span></span>
                  </td>
                  <td className="review_box1">
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
