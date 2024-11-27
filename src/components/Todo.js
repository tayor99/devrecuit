import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TodoContext";
import Input from "./Input";
import { Modal } from "./Modal";
import { FormWizard } from "./MultiStep";

export const TodoList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const filteredItems = tasks.filter((item) => item.text.includes(searchQuery));

  const openModalWithContent = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="todo__header">
          <Input
            type="text"
            placeholder="Search Todos"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <button onClick={() => openModalWithContent(<FormWizard />)}>
            Add New Todos
          </button>
        </div>

        {filteredItems.length < 1 ? (
          <p>No todos found</p>
        ) : (
          <ul>
            {filteredItems.map((task) => (
              <li key={task.id}>
                {" "}
                {task.text}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </>
  );
};
