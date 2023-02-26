import { Spin } from "antd";
import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { device, emptyElement } from "@/common/constant";
import AddCarBtn from "@/components/car/addCarBtn";
import CarCardCover from "@/components/car/carCardCover";
import { userRoleState } from "@/recoil/atoms/userAtom";
import { getAllCars } from "./api";
import { ICarDetail } from "./interfaces";
import FloatingIcon from "@/components/FloatingIcon";

// Styled
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 50%;
  @media ${device.lg} {
    width: 100%;
  }
`;
type Props = {};

function AllCarPage(props: Props) {
  // Recoil
  const [role, setRole] = useRecoilState(userRoleState);

  const [allCars, setAllCars] = useState<ICarDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCar, setShowCars] = useState<ICarDetail[]>([]);

  const getData = async () => {
    setLoading(true);
    const resAllCars = await getAllCars();
    setAllCars(resAllCars);
    setShowCars(resAllCars);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (value: string) => {
    if (value === "") {
      setShowCars(allCars);
      return;
    }
    let arr = allCars.filter((car) => {
      if (
        car.name.includes(value) ||
        car.relatedWord.join().includes(value) ||
        car.year.includes(value) ||
        car.color.includes(value) ||
        car.installment === parseInt(value)
      )
        return true;
      return false;
    });

    setShowCars(arr);
  };

  const showElement = (
    <Content>
      <div>ค้นหารถที่คุณต้องการ</div>
      <div style={{ marginBottom: "50px" }}>
        <Search
          onChange={(e) => {
            if (e.target.value === "") setShowCars(allCars);
          }}
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </div>
      <div>
        {role === "admin" && <AddCarBtn />}
        {showCar.length !== 0
          ? showCar.map((car) => {
              return (
                <CarCardCover
                  carId={car.carId}
                  mainImage={car.mainImage}
                  key={car.carId}
                />
              );
            })
          : emptyElement}
      </div>
    </Content>
  );

  const loadingElement = <Spin size={"large"} />;

  return (
    <Container>
      {!loading ? showElement : loadingElement} <FloatingIcon />{" "}
    </Container>
  );
}

export default AllCarPage;
