// src/components/KanbanBoard.js
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import DetailPane from "./DetailPane"; // import DetailPane component
import './KanbanBoard.css';

export default function KanbanBoard({ columns, setColumns }) {
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (!columns) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest('.kanban-task') && !e.target.closest('.detail-pane')) {
        setSelectedTask(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [columns]);

  if (!columns) return null;

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    const sourceCol = columns[source.droppableId];
    const sourceTasks = [...sourceCol.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
      }));
    } else {
      const destCol = columns[destination.droppableId];
      const destTasks = [...destCol.tasks];
      destTasks.splice(destination.index, 0, movedTask);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...sourceCol,
          tasks: sourceTasks,
        },
        [destination.droppableId]: {
          ...destCol,
          tasks: destTasks,
        },
      }));

      if (selectedTask && selectedTask.id === movedTask.id) {
        setSelectedTask((prev) => ({
          ...prev,
          status: destCol.title,
        }));
      }
    }
  };

  const handleTaskClick = (task, columnTitle) => {
    setSelectedTask({ ...task, status: columnTitle });
  };

  const closeDetailPane = () => {
    setSelectedTask(null);
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
                        onClick={() => handleTaskClick(task, column.title)}
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

      {/* แสดง DetailPane ถ้ามี task ที่เลือก */}
      {selectedTask && (
        <DetailPane task={selectedTask} closeDetailPane={closeDetailPane} />
      )}
    </div>
  );
}
