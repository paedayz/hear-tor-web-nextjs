import { useState } from "react";
import styled from "styled-components";

// Component
import CarCardCover from "@/components/car/carCardCover";
import { ICarHomepage, INotShowCars, IShowCars } from "./interfaces";
import { RightOutlined } from "@ant-design/icons";
import { emptyElement } from "@/common/constant";
import { useRouter } from "next/router";

const Container = styled.div`
  margin-top: 70px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
`;

const RightArrow = styled(RightOutlined)`
  margin-left: 10px;
`;

const NewCar = (props: ICarHomepage) => {
  const [showCars, setShowCars] = useState<IShowCars[]>(props.isShowCars);
  const [notShowCars, setNotShowCars] = useState<INotShowCars[]>(
    props.notShowCars
  );

  const router = useRouter();

  const renderShowCar = showCars.map((car) => (
    <CarCardCover
      mainImage={car.mainImage}
      carId={car.carId}
      key={car.carId}
    />
  ));

  const title = (
    <Title>
      <div>รถมาใหม่ร้านเฮีย ต. </div>
      <RightArrow color="black" onClick={() => router.push("/allCar")} />
    </Title>
  );
  return (
    <Container>
      {title}
      {showCars.length !== 0 ? (
        renderShowCar
      ) : (
        emptyElement
      )}
    </Container>
  );
};

export default NewCar;
