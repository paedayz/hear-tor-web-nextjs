import React, { Fragment, useEffect, useState } from "react";
import { HomeContainer } from "./home.styled";
import styled from "styled-components";

// Component
import Carousel from "@/components/carousel";
import NewCar from "./newCar";
import StoreActivity from "./storeActivity";
import StoreTip from "./storeTip";

import { ICarHomepage } from "./interfaces";
import { getHomepageNewCar } from "./api";
import { Col, Row, Spin } from "antd";
import FloatingIcon from "@/components/FloatingIcon";

// Styled
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {};

const Homepage = (props: Props) => {
  const [carHomepage, setCarHomepage] = useState<ICarHomepage>({
    isShowCars: [],
    notShowCars: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const carHomepage = await getHomepageNewCar();
    setCarHomepage(carHomepage);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const showElement = (
    <Fragment>
      <Carousel />
      <NewCar isShowCars={carHomepage.isShowCars} notShowCars={carHomepage.notShowCars} />
      <StoreActivity />
      <StoreTip />
    </Fragment>
  );

  const loadingElement = (
    <LoadingContainer>
      <Spin size={"large"} />
    </LoadingContainer>
  );

  return (
    <>
      <FloatingIcon />

      <HomeContainer>{!loading ? showElement : loadingElement}</HomeContainer>
    </>
  );
};

export default Homepage;
