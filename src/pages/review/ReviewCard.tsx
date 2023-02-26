import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { device } from "../../common/constant";
import { IReviewPage } from "./interfaces";

const Container = styled.div`
  display: flex;
  @media ${device.lg} {
    display: block;
  }
`;

const VideoContainer = styled.div``;

const videoStyle: React.CSSProperties = {};

const TextContainer = styled.div`
  display: block;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
  @media ${device.lg} {
    font-size: 26px;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  @media ${device.lg} {
    font-size: 20px;
  }
`;

function ReviewCard({ linkURL, title, description }: IReviewPage) {
  return (
    <Container>
      <VideoContainer>
        <ReactPlayer
          width="500px"
          url={linkURL}
        />
      </VideoContainer>
      <TextContainer style={{ paddingLeft: "16px" }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
}

export default ReviewCard;
