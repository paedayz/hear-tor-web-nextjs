import React, { useState, useEffect } from "react";
import { ReviewContainer } from "./review.styled";
import { Col, Row } from "antd";
import { IReviewPage } from "./interfaces";
import ReviewCard from "./ReviewCard";
import FloatingIcon from "../../components/FloatingIcon";
import review_data from './reviewData.json'
type Props = {};

function ReviewPage(props: Props) {
  const [reviewData, setReviewData] = useState<IReviewPage[]>(Object.assign(review_data));

  return (
    <ReviewContainer>
      {reviewData.map((item, index) => {
        return (
          <div key={index}>
            <ReviewCard
              description={item.description}
              linkURL={item.linkURL}
              title={item.title}
              key={Math.random()}
            />
            <hr style={{ border: "1px solid #CDCDCD", marginBottom: "30px" }} />
          </div>
        );
      })}
      <FloatingIcon/>
    </ReviewContainer>
  );
}

export default ReviewPage;
