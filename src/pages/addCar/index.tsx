import { UploadFile } from "antd/lib/upload/interface";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "@/common/constant";
import InputField from "@/components/field/inputField";
import UploadImage from "@/components/field/uploadImage";
import ToggleInput from "@/components/field/toggleInput";
import { Button } from "antd";
import { addCar } from "./api";
import { useRouter } from "next/router";

// Styled
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 50%;
  @media ${device.lg} {
    width: 100%;
  }
`;

const PageTitle = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 50px;
`;

const SaveButton = styled(Button)`
  margin-bottom: 100px;
`;

type Props = {};

function AddCarPage(props: Props) {
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [mainImage, setMainImage] = useState<any>();
  const [previewImages, setPreviewImages] = useState<any[]>([]);
  const [isShowHomepage, setIsShowHomepage] = useState<boolean>(false);
  const [relatedWord, setRelatedWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [installment, setInstallment] = useState<number>(0)

  const router = useRouter();

  const onClickSave = async () => {
    setLoading(true);
    const saveData = {
      name,
      year,
      price,
      color,
      description,
      mainImage: mainImage,
      previewImages: previewImages,
      isShowHomepage,
      relatedWord,
      installment
    };

    let formData = new FormData();
    formData.append("name", saveData.name);
    formData.append("year", saveData.year);
    formData.append("price", saveData.price.toString());
    formData.append("color", saveData.color);
    formData.append("description", saveData.description);
    formData.append("mainImage", saveData.mainImage);
    saveData.previewImages.map((img) => {
      formData.append("previewImages", img);
    });

    formData.append("isShowHomepage", saveData.isShowHomepage.toString());
    formData.append("relatedWord", saveData.relatedWord);
    formData.append("installment", saveData.installment.toString())

    console.log("Save data", saveData)

    const carId = await addCar(formData);
    if (carId) {
      setLoading(false);
      router.push(`/car/${carId}`);
    } else {
      router.push("/allCar");
    }
  };

  return (
    <Container>
      <Content>
        <PageTitle>เพิ่มข้อมูลรถ</PageTitle>
        <InputField
          type={"text"}
          title="ชื่อรถ"
          value={name}
          setDataFunc={setName}
        />
        <InputField
          type={"text"}
          title="ปีที่ผลิต"
          value={year}
          setDataFunc={setYear}
        />
        <InputField
          type={"number"}
          title="ราคา"
          value={price}
          setDataFunc={setPrice}
        />
        <InputField
          type={"number"}
          title="ราคาผ่อน"
          value={installment}
          setDataFunc={setInstallment}
        />
        <InputField
          type={"text"}
          title="สี"
          value={color}
          setDataFunc={setColor}
        />
        <InputField
          type={"text"}
          title="คำอธิบาย"
          value={description}
          setDataFunc={setDescription}
          isTextArea={true}
        />
        <InputField
          type={"text"}
          title="คำที่เกี่ยวข้อง"
          value={relatedWord}
          setDataFunc={setRelatedWord}
        />
        <UploadImage
          title="รูปหลัก"
          setDataFunc={(file) => {
            if (typeof file == "object") setMainImage(file);
          }}
          isSingleInput={true}
          onDeleteOldImages={() => {}}
        />
        <UploadImage
          title="รูปเพิ่มเติม"
          setDataFunc={(file) => {
            if (typeof file === "string") {
              let arr = previewImages.filter((image) => image.name !== file);
              setPreviewImages(arr);
            } else {
              let arr = previewImages;
              arr?.push(file);
              setPreviewImages(arr);
            }
          }}
          isSingleInput={false}
          onDeleteOldImages={() => {}}

        />
        <ToggleInput
          title="แสดงในหน้าแรก"
          value={isShowHomepage}
          setDataFunc={setIsShowHomepage}
        />
        <SaveButton style={{ marginBottom: "100px" }} disabled={loading || mainImage === undefined || mainImage === null} onClick={onClickSave}>
          บันทึก
        </SaveButton>
      </Content>
    </Container>
  );
}

export default AddCarPage;
