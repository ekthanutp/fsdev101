// src/components/ListBoard.js
import React, { useState, useEffect } from "react";
import DetailPane from "./DetailPane"; // import DetailPane component
import './ListBoard.css';

export default function ListBoard({ columns }) {
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (!columns) return;

    const handleClickOutside = (e) => {
      // เช็คว่าไม่ได้คลิกที่ task หรือ DetailPane
      if (!e.target.closest('.list-item') && !e.target.closest('.detail-pane')) {
        setSelectedTask(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [columns]);

  if (!columns) return null; // <--- ป้องกันไว้ก่อน

  const allTasks = Object.entries(columns).flatMap(([columnId, column]) =>
    column.tasks.map((task) => ({
      id: task.id,
      content: task.content,
      status: column.title, // ใช้ title ของ column เป็น status
      description: task.description || "No description", // เพิ่ม description
    }))
  );

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const closeDetailPane = () => {
    setSelectedTask(null); // ปิด DetailPane
  };

  return (
    <div className="list-board">
      <h2>List View</h2>
      <ul>
        {allTasks.map((task) => (
          <li key={task.id} className="list-item" onClick={() => handleTaskClick(task)}>
            <span className="list-item-title">{task.content}</span>
            <span className={`list-item-status ${task.status.toLowerCase()}`}>
              {task.status.toUpperCase()}
            </span>
          </li>
        ))}
      </ul>

      {/* แสดง DetailPane ถ้ามี task ที่เลือก */}
      {selectedTask && (
        <DetailPane task={selectedTask} closeDetailPane={closeDetailPane} />
      )}
    </div>
  );
}
