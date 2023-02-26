import styled from "styled-components";

// Component
import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import ActivityCard from "@/components/activities/activityCard";
import { device } from "@/common/constant";

const Container = styled.div`
  margin-top: 70px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  height: 200px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background-color: red;
    border: 1px solid black;
  }

  @media ${device.lg} {
    justify-content: center;
  }
`;

const RightArrow = styled(RightOutlined)`
  margin-left: 10px;
`;

type Props = {};

export interface IStoreActivity {
  image: string;
  title: string;
  link: string;
}

const StoreActivity = (props: Props) => {
  const [storeActivies, setStoreActivities] = useState<IStoreActivity[]>([
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/storeActivites%2F80842772_2580468012188853_1331443143115014144_n.jpg?alt=media",
      title: "โรงเรียนสอนขับรถ เมืองเลยไดร์ฟเวอร์",
      link: "https://www.facebook.com/mld.driver",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/storeActivites%2F59295498_829626460729996_1007802342155747328_n.jpg?alt=media",
      title: "ศูนย์บริการซ่อมรถยนต์ เฮีย ต.",
      link: "https://www.facebook.com/อู่ซ่อมรถยนต์-เฮีย-ต-829594737399835?_rdc=1&_rdr",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/storeActivites%2F3456374566_8756784464674576546767865785676785678_n.jpg?alt=media",
      title: "รถมอเตอร์ไซค์มือสองวังสะพุง ต.เจริญยนต์ จังหวัดเลย",
      link: "https://www.facebook.com/TorWangSaphung?_rdc=1&_rdr",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/storeActivites%2F73264635_409489009745976_8995074360200921088_n.jpg?alt=media",
      title: "ตรอ. ต.เจริญยนต์ นาโป่ง",
      link: "https://www.facebook.com/ตรอ-ตเจริญยนต์-นาโป่ง-167843750577171",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/storeActivites%2F277754663_396486065813249_6238586196180324635_n.jpg?alt=media",
      title: "สถานตรวจสภาพรถ ต.เจริญยนต์ วังสะพุง",
      link: "https://www.facebook.com/profile.php?id=100063555761112&_rdc=1&_rdr",
    },
  ]);

  const renderStoreActivity = storeActivies.map((item) => {
    return (
      <ActivityCard
        image={item.image}
        title={item.title}
        link={item.link}
        key={Math.random()}
      />
    );
  });
  const title = (
    <Title>
      <div>เฮีย ต. เรื่องรถครบวงจร </div>
    </Title>
  );
  return (
    <Container>
      {title}
      <CardContainer>{renderStoreActivity}</CardContainer>
    </Container>
  );
};

export default StoreActivity;
