import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "@/common/constant";

// styled
const Container = styled.div`
  margin-bottom: 20px;
`;

const OldCarImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  @media ${device.lg} {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  &:hover {
    border: 2px red solid;
  }
`;

// interfaces
export interface IOnDeleteData {
  oldImageList: string[];
  delteImage: string;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type Props = {
  setDataFunc(data: any): void;
  isSingleInput: boolean;
  title: string;
  oldImages?: string[];
  onDeleteOldImages(data: IOnDeleteData): void;
};

const App = ({
  setDataFunc,
  isSingleInput,
  title,
  oldImages,
  onDeleteOldImages,
}: Props) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const renderOldImages =  oldImages?.map((img) => {
    return (
      <OldCarImage
        src={img}
        onClick={() => {
          const oldImageList = oldImages.filter((value) => value != img);
          const onDeleteData: IOnDeleteData = {
            oldImageList,
            delteImage: img,
          };

          onDeleteOldImages(onDeleteData);
        }}
      />
    );
  });

  return (
    <Container>
      <div>{title}</div>
      {renderOldImages}
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={(file) => {
          setDataFunc(file.name);
        }}
        maxCount={isSingleInput ? 1 : 20}
        multiple={!isSingleInput}
        customRequest={async (options: any) => {
          setDataFunc(options.file);
          options.onSuccess("Ok");
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </Container>
  );
};

export default App;
