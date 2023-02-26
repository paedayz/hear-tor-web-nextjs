import { UploadFile } from "antd/lib/upload/interface";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "@/common/constant";
import InputField from "@/components/field/inputField";
import UploadImage from "@/components/field/uploadImage";
import ToggleInput from "@/components/field/toggleInput";
import { Button } from "antd";
import { useRouter } from "next/router";
import { editCarDetail } from "@/pages/carDetail/api";
import { ICarDetail } from "@/pages/carDetail/interfaces";

// Styled
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
`;

export interface IEditCarDetail {
  name: string;
  year: string;
  price: number;
  color: string;
  description: string;
  mainImage: string;
  previewImages: string[];
  isShowHomepage: boolean;
  relatedWord: string[];
  installment: number;
}

type Props = {
  carDetail: ICarDetail | null;
  handleEditOk(): void;
};

function EditCarDetail({ carDetail, handleEditOk }: Props) {
  const [name, setName] = useState<string | undefined>(carDetail?.name);
  const [year, setYear] = useState<string | undefined>(carDetail?.year);
  const [price, setPrice] = useState<number | undefined>(carDetail?.price);
  const [color, setColor] = useState<string | undefined>(carDetail?.color);
  const [description, setDescription] = useState<string | undefined>(
    carDetail?.description
  );
  const [mainImage, setMainImage] = useState<string | undefined | null>(
    carDetail?.mainImage
  );
  const [previewImages, setPreviewImages] = useState<string[] | undefined>(
    carDetail?.previewImages
  );
  const [isShowHomepage, setIsShowHomepage] = useState<boolean | undefined>(
    carDetail?.isShowHomepage
  );
  const [relatedWord, setRelatedWord] = useState<string | undefined>(
    carDetail?.relatedWord.join(",")
  );

  const [deletePreviewImages, setDeteledPreviewImage] = useState<string[]>([]);
  const [newMainImage, setNewMainImage] = useState<any>();
  const [newPreviewImages, setNewPreviewImages] = useState<any[]>([]);
  const [installment, setInstallment] = useState<number>(carDetail?.installment || 0)

  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter();

  const onClickSave = async () => {
    if(mainImage === null && newMainImage === undefined) return

    setLoading(true)
    const saveData = {
      carId: carDetail?.carId,
      name,
      year,
      price,
      color,
      description,
      isShowHomepage,
      relatedWord,
      oldMainImage: mainImage,
      oldPreviewImages: previewImages?.join(","),
      newMainImage,
      newPreviewImages,
      deletePreviewImages: deletePreviewImages.join(","),
      createdAt: new Date().toDateString(),
    };

    let formData = new FormData();
    formData.append("carId", saveData.carId as string);
    formData.append("name", saveData.name as string);
    formData.append("year", saveData.year as string);
    formData.append("price", (saveData.price as number).toString());
    formData.append("color", saveData.color as string);
    formData.append("description", saveData.description as string);
    formData.append(
      "isShowHomepage",
      (saveData.isShowHomepage as boolean).toString()
    );
    formData.append("relatedWord", saveData.relatedWord as string);
    formData.append("oldMainImage", saveData.oldMainImage as string);
    formData.append("oldPreviewImages", saveData.oldPreviewImages as string);
    formData.append('newMainImage',saveData.newMainImage)
    saveData.newPreviewImages?.map((img) => {
      formData.append("newPreviewImages", img);
    });
    formData.append('deletePreviewImages',saveData.deletePreviewImages)
    formData.append('createdAt',saveData.createdAt)
    formData.append('installment', installment.toString())

    const carId = await editCarDetail(formData)
    if(carId) {
      window.location.reload();
    } else {
      router.push('/allCar')
    }
  };

  return (
    <Container>
      <Content>
        <InputField
          type={"text"}
          title="ชื่อรถ"
          value={name as string}
          setDataFunc={setName}
        />
        <InputField
          type={"text"}
          title="ปีที่ผลิต"
          value={year as string}
          setDataFunc={setYear}
        />
        <InputField
          type={"number"}
          title="ราคา"
          value={price as number}
          setDataFunc={setPrice}
        />
        <InputField
          type={"number"}
          title="ราคาผ่อน"
          value={installment as number}
          setDataFunc={setInstallment}
        />
        <InputField
          type={"text"}
          title="สี"
          value={color as string}
          setDataFunc={setColor}
        />
        <InputField
          type={"text"}
          title="คำอธิบาย"
          value={description as string}
          setDataFunc={setDescription}
          isTextArea={true}
        />
        <InputField
          type={"text"}
          title="คำที่เกี่ยวข้อง"
          value={relatedWord as string}
          setDataFunc={setRelatedWord}
        />
        <UploadImage
          oldImages={mainImage ? ([mainImage] as string[]) : []}
          title="รูปหลัก"
          setDataFunc={(file) => {
            if (typeof file == "object") setNewMainImage(file);
          }}
          isSingleInput={true}
          onDeleteOldImages={(data) => {
            setMainImage(null);
          }}
        />
        <UploadImage
          oldImages={previewImages as string[]}
          title="รูปเพิ่มเติม"
          setDataFunc={(file) => {
            if (typeof file === "string") {
              let arr = newPreviewImages.filter((image) => image.name !== file);
              setNewPreviewImages(arr);
            } else {
              let arr = newPreviewImages;
              arr?.push(file);
              setNewPreviewImages(arr);
            }
          }}
          isSingleInput={false}
          onDeleteOldImages={(data) => {
            setPreviewImages(data.oldImageList);
            let buffArr = deletePreviewImages;
            buffArr.push(data.delteImage);
            setDeteledPreviewImage(buffArr);
          }}
        />
        <ToggleInput
          title="แสดงในหน้าแรก"
          value={isShowHomepage as boolean}
          setDataFunc={setIsShowHomepage}
        />
        <Button disabled={mainImage === null && newMainImage === undefined || loading} onClick={onClickSave}>บันทึก</Button>
      </Content>
    </Container>
  );
}

export default EditCarDetail;
