import { Button, message, Input, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { taskContext } from "../contexts/taskContext";
import FormItem from "antd/es/form/FormItem";
const CreateTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, setData } = useContext(taskContext);
  const [taskInputText, setTaskInputText] = useState("");

  const [taskInputTitle, setTaskInputTitle] = useState("");
  const handleCreateTask = (e) => {
    setData([...data, { Title: taskInputTitle, Desc: taskInputText }]);
    setIsOpen(false);
    setTaskInputText("");
    setTaskInputTitle("");
    message.success("New task added");
  };
  const handleTaskInputChange = (e) => {
    setTaskInputText(e.target.value);
  };
  const handleTaskInputTitleChange = (e) => {
    setTaskInputTitle(e.target.value);
  };
  return (
    <div className="flex justify-center my-2 ">
      <Button onClick={() => setIsOpen(true)} type="primary" size="large">
        <span>
          <PlusCircleOutlined className="text-green-600 text-sm p-1 bg-white rounded-xl border-solid  border-1 mx-1" />
          Create Task
        </span>
      </Button>
      <Modal
        title="Create new Task"
        open={isOpen}
        className="my-5"
        onOk={handleCreateTask}
        onCancel={() => setIsOpen(false)}
      >
        <Input
          className="mb-2"
          onChange={handleTaskInputTitleChange}
          placeholder="Task Title"
          value={taskInputTitle}
        />

        <TextArea
          value={taskInputText}
          onChange={handleTaskInputChange}
          cols={6}
          rows={6}
          placeholder="Enter your Task Description..."
        />
      </Modal>
    </div>
  );
};

export default CreateTask;
