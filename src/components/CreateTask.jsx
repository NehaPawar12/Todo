import { Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const CreateTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCreateTask = () => {};
  return (
    <div className="flex justify-center my-2 ">
      <Button onClick={() => setIsOpen(true)} type="primary">
        <span>
          <PlusCircleOutlined className="text-white mx-1" /> Create Task
        </span>
      </Button>
      <Modal
        title="Create new Task"
        open={isOpen}
        onOk={handleCreateTask}
        onCancel={() => setIsOpen(false)}
      >
        <TextArea cols={6} rows={6} placeholder="Enter your Task ..." />
      </Modal>
    </div>
  );
};

export default CreateTask;
