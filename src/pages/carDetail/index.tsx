import { Button, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById, getCarByKeywords } from "./api";
import { ICarDetail, IRelatedCar } from "./interfaces";
import FloatingIcon from "@/components/FloatingIcon";
import {
  PreviewImages,
  ImageContainer,
  MainImage,
  PreviewImagesContainer,
  DetailContainer,
  Name,
  LoadingContainer,
  Container,
  ButtonArea,
  RowContent,
  Content,
  RelatedContainer,
  RelatedCarArea,
  RelatedCarTitle,
} from "./styled";
import { useRecoilState } from "recoil";
import { userRoleState } from "@/recoil/atoms/userAtom";

// Component
import EditDeleteCarButton from "./editDelCarBtn";
import RelatedCarCard from "@/components/car/relatedCar";

type Props = {};

function CarDetail({}: Props) {
  // Recoil
  const [role, setRole] = useRecoilState(userRoleState);

  const [carDetail, setCarDetail] = useState<ICarDetail | null>(null);
  const [bigImage, setBigImage] = useState<string>("");
  const [relatedCar, setRelatedCar] = useState<IRelatedCar[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const params: { id: string } = useParams();

  const clickPreviewImage = (url: string) => {
    if (url === bigImage) {
      setBigImage(carDetail?.mainImage as string);
    } else {
      setBigImage(url);
    }
  };

  const getData = async () => {
    setLoading(true);
    const resCarDetail = await getCarById(params.id);
    if (resCarDetail) {
      console.log(resCarDetail)
      const resRelatedCar = await getCarByKeywords(resCarDetail.relatedWord);
      setCarDetail(resCarDetail);
      setBigImage(resCarDetail.mainImage);
      setRelatedCar(
        resRelatedCar.filter(
          (item) => item.carId !== carDetail?.carId
        ) as IRelatedCar[]
      );
    }

    setLoading(false);
  };

  function numberWithCommas(x: number) {
    if (!x) return;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    getData();
  }, []);

  const renderPreviewImage = carDetail?.previewImages.map((img) => (
    <PreviewImages
      src={img}
      onClick={() => clickPreviewImage(img)}
      selected={img === bigImage}
    />
  ));

  const renderRelatedCarCard = relatedCar.map((car) => (
    <RelatedCarCard carDetail={car} />
  ));

  const showElement = (
    <Content>
      <RowContent>
        <ImageContainer>
          <MainImage src={bigImage} />
          <PreviewImagesContainer>{renderPreviewImage}</PreviewImagesContainer>
        </ImageContainer>
        <DetailContainer>
          {role === "admin" && <EditDeleteCarButton carDetail={carDetail} />}
          <Name>
            {carDetail?.name} ปี {carDetail?.year}
          </Name>
          <div>ราคา {numberWithCommas(carDetail?.price as number)} บาท</div>
          {carDetail?.installment && <div>ผ่อน {numberWithCommas(carDetail?.installment)} บาท</div>}
          
          <div>สี{carDetail?.color}</div>
          <div>{carDetail?.description}</div>
          <hr />
          <br />
          <div>
            ออกรถวันนี้ ไม่ดาวน์ ไม่ค้ำ ออกได้ทุกอาชีพ พร้อมผ่อนสบายๆ 🥰 <br />
            <br />
            👉ใช้แค่บัตรประชาชนใบเดียว ก็รู้แล้วว่าออกรถได้หรือไม่ <br />
            👉ออกรถ 0 บาท
            <br />
            👉อนุมัติง่าย ออกได้ทุกอาชีพ
            <br />
            👉บริการเซ็นต์เอกสาร ถึงบ้าน ฟรี !<br />
            👉อยู่ต่างจังหวัด สามารถออกได้
            <br />
            👉ขับรถไม่เป็นแถมคอร์สเรียนขับรถพร้อมใบขับขี่
            <br />
            👉มีเครดิต 1 เดือนก็ออกได้
            <br />
            👉อายุงาน 4 เดือนก็ออกได้
            <br />
            👉ติดแท็กซิ่งก็ออกได้
            <br />
            👉เตรียมเอกสารง่ายไม่ยุ่งยาก
            <br />
            👉 รถจอดให้ดูที่หน้าร้านทุกคัน ไม่มีขายรูปเด็ดขาด !<br />
            👉 มีบริการหลังการขาย
            <br />
            👉 ร้านของคนเมืองเลยพร้อมดูแลคนเมืองเลย
            <br />
            👉 รถเยอะที่สุดในจังหวัดเลย <br />
          </div>
          <hr />
          <br />
          <div>
            ยินดีให้คำปรึกษา โทรเลย
            <br />
            ทักไลน์ <a>https://lin.ee/CCjNv5p</a>
            <br />
            0963615936 น้องตรุษจีน
            <br />
            0884838011 เฮียเป็ด
            <br />
          </div>
        </DetailContainer>
      </RowContent>

      {relatedCar.length !== 0 && (
        <RowContent>
          <RelatedContainer>
            <RelatedCarTitle>สินค้าที่แนะนำ</RelatedCarTitle>
            <RelatedCarArea>{renderRelatedCarCard}</RelatedCarArea>
          </RelatedContainer>
        </RowContent>
      )}
    </Content>
  );

  const loadingElement = (
    <LoadingContainer>
      <Spin size={"large"} />
    </LoadingContainer>
  );
  return (
    <Container>
      {!loading ? showElement : loadingElement} <FloatingIcon />
    </Container>
  );
}

export default CarDetail;
