import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./KanbanBoard.css";

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

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
  
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
  
    const sourceCol = columns[source.droppableId];
    const sourceTasks = [...sourceCol.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);
  
    if (source.droppableId === destination.droppableId) {
      // 👉 ลากภายในกล่องเดียวกัน
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
      });
    } else {
      // 👉 ลากข้ามกล่อง
      const destCol = columns[destination.droppableId];
      const destTasks = [...destCol.tasks];
      destTasks.splice(destination.index, 0, movedTask);
  
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
        [destination.droppableId]: {
          ...destCol,
          tasks: destTasks,
        },
      });
    }
  };

  return (
    <div className="kanban-board">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
              className={`kanban-column ${columnId}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h2 className="kanban-column-title">{column.title}</h2>
              {column.tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      className={`kanban-task task-in-${columnId}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
