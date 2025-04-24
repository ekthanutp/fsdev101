import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ navigate สำหรับเปลี่ยนหน้า

function ProjectsPage() {
  const [projects, setProjects] = useState([]); // เก็บโปรเจกต์ใน state
  const navigate = useNavigate();

  const addProject = () => {
    const newProject = { id: projects.length + 1, name: `Project ${projects.length + 1}` };
    setProjects([...projects, newProject]); // เพิ่มโปรเจกต์ใหม่
  };

  const viewProject = (id) => {
    navigate(`/projects/${id}`); // เปลี่ยนหน้าไปยังรายละเอียดโปรเจกต์
  };

  return (
    <div>
      <h1>Projects</h1>
      <button onClick={addProject}>Add Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => viewProject(project.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
