import React, { useState } from "react";
import KanbanBoard from "./KanbanBoard";
import ListBoard from "./ListBoard";
import "./MainBoard.css";

const initialData = {
  planning: {
    title: "Planning",
    tasks: [
      { id: "1", content: "W67-00001" },
      { id: "2", content: "W67-00002" },
    ],
  },
  engineering: {
    title: "Engineering",
    tasks: [
      { id: "3", content: "W67-00003" },
      { id: "4", content: "W67-00004" },
    ],
  },
  preparation: {
    title: "Preparation",
    tasks: [
      { id: "5", content: "W67-00005" },
      { id: "6", content: "W67-00006" },
    ],
  },
  production: {
    title: "Production",
    tasks: [
      { id: "7", content: "W67-00007" },
      { id: "8", content: "W67-00008" },
    ],
  },
  service: {
    title: "Service",
    tasks: [
      { id: "9", content: "W67-00009" },
      { id: "10", content: "W67-00010" },
    ],
  },
};

export default function MainBoard() {
  const [columns, setColumns] = useState(initialData);
  const [viewMode, setViewMode] = useState("kanban");

  return (
    <div className="main-board">
      <div className="view-toggle">
        <button onClick={() => setViewMode("kanban")} className="btn">
          Kanban View
        </button>
        <button onClick={() => setViewMode("list")} className="btn">
          List View
        </button>
      </div>

      {viewMode === "kanban" ? (
        columns ? (
          <KanbanBoard columns={columns} setColumns={setColumns} />
        ) : (
          <p>Loading...</p>
        )
      ) : columns ? (
        <ListBoard columns={columns} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
