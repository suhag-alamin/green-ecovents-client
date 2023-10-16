import axiosInstance from "@/helpers/axios/axiosInstance";
import { IDeleteInfo } from "@/interfaces/global";
import { Modal, Typography, message } from "antd";
import React, { useState } from "react";

interface DeleteModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  modalText: string;
  deleteInfo: IDeleteInfo | undefined;
}

const DeleteModal = ({
  modalOpen,
  setModalOpen,
  modalText,
  deleteInfo,
  setIsDeleted,
}: DeleteModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = async () => {
    setConfirmLoading(true);
    if (deleteInfo) {
      const result = await axiosInstance.delete(deleteInfo.api);

      const response = result.data;
      if (response?.statusCode === 200) {
        message.success(response.message);
        setIsDeleted(true);
        setConfirmLoading(false);
        setModalOpen(false);
      }
      // @ts-ignore
      else if (!result?.success) {
        setConfirmLoading(false);
        // @ts-ignore
        message.error(result?.message);
      }
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal
        open={modalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Delete"
        okType="danger"
      >
        <Typography.Title
          style={{
            padding: 20,
            textAlign: "center",
          }}
          level={4}
          type="warning"
        >
          {modalText}
        </Typography.Title>
      </Modal>
    </>
  );
};

export default DeleteModal;
