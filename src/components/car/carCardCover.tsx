import React from "react";
import styled from "styled-components";
import { device } from "@/common/constant";
import { IShowCars } from "@/pages/interfaces";
import { useRouter } from 'next/router'

const CoverImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 35px;
  margin-bottom: 30px;
  cursor: pointer;

  @media ${device.lg} {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

type Props = {};

function CarCardCover({ mainImage, carId }: IShowCars) {
  const router = useRouter()

  const gotoDetailPage = () => {
    router.push(`car/${carId}`);
  };
  return <CoverImage onClick={gotoDetailPage} src={mainImage} />;
}

export default CarCardCover;
