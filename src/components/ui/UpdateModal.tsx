import Form from "@/components/Forms/Form";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IUpdateInfo } from "@/interfaces/global";
import { Button, Flex, Modal, message } from "antd";
import React, { ReactElement, ReactNode, useState } from "react";

interface UpdateModalProps {
  updateModalOpen: boolean;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  modalText: string;
  updateInfo: IUpdateInfo | undefined;
  children: ReactElement | ReactNode;
  defaultValues?: any;
}

const UpdateModal = ({
  updateModalOpen,
  setUpdateModalOpen,
  modalText,
  updateInfo,
  setIsUpdated,
  children,
  defaultValues,
}: UpdateModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleUpdate = async (data: any) => {
    setConfirmLoading(true);

    if (updateInfo) {
      const result = await axiosInstance.patch(updateInfo.api, data);

      const response = result.data;
      if (response?.statusCode === 200) {
        message.success(response.message);
        setIsUpdated(true);
        setConfirmLoading(false);
        setUpdateModalOpen(false);
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
    setUpdateModalOpen(false);
  };

  return (
    <>
      <Modal
        title={modalText}
        open={updateModalOpen}
        confirmLoading={confirmLoading}
        footer={false}
      >
        <Form submitHandler={handleUpdate} defaultValues={defaultValues}>
          {children}

          <Flex
            style={{
              marginTop: 30,
            }}
            justify="end"
            gap={8}
          >
            <Button type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button loading={confirmLoading} type="primary" htmlType="submit">
              Update
            </Button>
          </Flex>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateModal;
