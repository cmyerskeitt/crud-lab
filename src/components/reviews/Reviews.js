
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const listOfReviews = restReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview}/>
    })

    return (
      <ul>
        {listOfReviews}
      </ul>
    );
  }
};

export default Reviews;