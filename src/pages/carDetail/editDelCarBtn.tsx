import { Button, Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { deleteCar } from "./api";
import { ICarDetail } from "./interfaces";
import { ButtonArea } from "./styled";

// Component
import EditCarDetail from "@/components/car/editCarDetail";

type Props = {
  carDetail: ICarDetail | null;
};

const EditDelCarBtn = ({ carDetail }: Props) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] =
    useState<boolean>(false);
  const [confirmDeleteLoading, setConfirmDeleteLoading] = useState(false);
  const [modalDeleteText, setModalDeleteText] = useState("");

  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [confirmEditLoading, setConfirmEditLoading] = useState(false);

  const router = useRouter();

  const showDeleteModal = () => {
    setModalDeleteText(`คุณต้องการลบข้อมูลรถ ${carDetail?.name} ใช่หรือไม่ ?`);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteOk = async () => {
    setConfirmDeleteLoading(true);
    setModalDeleteText("กำลังทำการลบ");
    if (carDetail?.carId) await deleteCar(carDetail?.carId);
    setModalDeleteText("ลบสำเร็จ");
    setTimeout(() => {
      router.push("/allCar");
    }, 2000);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleEditOk = async () => {
    setConfirmEditLoading(true);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  return (
    <ButtonArea>
      <Button onClick={showEditModal} style={{ marginRight: "10px" }}>
        แก้ไข
      </Button>
      <Button onClick={showDeleteModal} danger>
        ลบ
      </Button>
      <Modal
        title="ยืนยันการลบ"
        visible={isDeleteModalVisible}
        okText="ใช่"
        cancelText="ไม่ใช่"
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        confirmLoading={confirmDeleteLoading}
      >
        {modalDeleteText}
      </Modal>

      <Modal
        title="แก้ไขข้อมูลรถ"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        confirmLoading={confirmEditLoading}
        footer={null}
      >
        <EditCarDetail handleEditOk={handleEditOk} carDetail={carDetail}/>
      </Modal>
    </ButtonArea>
  );
};

export default EditDelCarBtn;
