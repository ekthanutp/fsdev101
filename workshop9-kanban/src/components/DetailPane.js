// DetailPane.js
import React from "react";
import './DetailPane.css';

export default function DetailPane({ task, closeDetailPane }) {
  console.log(task); // เพิ่ม log เพื่อตรวจสอบว่า task ถูกส่งมาถึงหรือไม่
  return (
    <div className="detail-pane">
      <div className="detail-pane-content">
        <h3>Task Details</h3>
        <p><strong>Title:</strong> {task.content}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Description:</strong> {task.description}</p>
        <button onClick={closeDetailPane}>Close</button>
      </div>
    </div>
  );
}
