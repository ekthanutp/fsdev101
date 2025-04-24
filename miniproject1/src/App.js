import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import TasksPage from './pages/TasksPage';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </>
  );
}

export default App;
