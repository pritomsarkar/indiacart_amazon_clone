import React from "react";
const Rating = (props) => {
  let { rating, numReviews } = props;
  return (
    <div className="rating">
      {[...Array(5)].map((rate, index) => {
        return (
          <span key={index}>
            <i
              className={
                rating >= index + 1
                  ? "fa fa-star"
                  : rating >= index + 0.5
                  ? "fa fa-star-half-o"
                  : "fa fa-star-o"
              }
            ></i>
          </span>
        );
      })}
      <span>({numReviews} of Reviews)</span>
    </div>
  );
};

export default Rating;
