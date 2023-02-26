import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { device } from "@/common/constant";
import { IRelatedCar } from "@/pages/carDetail/interfaces";

// styled
const Container = styled.div`
  display: block;
  width: 150px;
  margin-right: 40px;
  margin-bottom: 50px;
  text-align: center;
  border-radius: 10px;
  background-color: #f1f1f1;
  box-shadow: 10px 10px 20px #c2c2c2;
  cursor: pointer;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  /* border-radius: 20px; */
  /* margin-bottom: 30px; */

  @media ${device.lg} {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

const TextArea = styled.div`
  padding: 10px;
`;

const CarName = styled.div`
    font-weight: 50px;
`

type Props = {
  carDetail: IRelatedCar;
};

const RelatedCar = ({ carDetail }: Props) => {
    const router = useRouter()
    function numberWithCommas(x:number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <Container onClick={() => {
        router.push(`/car/${carDetail.carId}`)
        window.location.reload()
    }}>
      <CoverImage src={carDetail.mainImage} />
      <TextArea>
        <CarName>{carDetail.name}</CarName>
        <div style={{marginTop: '10px'}}>ปี {carDetail.year}</div>
        <hr/>
        <div>{numberWithCommas(carDetail.price)} ฿</div>
      </TextArea>
    </Container>
  );
};

export default RelatedCar;
