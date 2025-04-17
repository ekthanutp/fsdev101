// App.jsx
import React, { useState } from 'react';
import { Container } from '@mui/material';
import TopMenu from './TopMenu';
import PeoplePage from './PeoplePage';
import FoodPage from './FoodPage';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [people, setPeople] = useState([]); // ✅ state สำหรับรายชื่อคน

  return (
    <Container maxWidth="md" sx={{ mt: 4, border: '1px solid #ccc', borderRadius: '12px', p: 3 }}>
      <TopMenu activeTab={activeTab} onChangeTab={setActiveTab} />
      {activeTab === 0 && <FoodPage people={people} />} {/* ส่ง people ไปด้วยถ้าต้องใช้ */}
      {activeTab === 1 && <PeoplePage people={people} setPeople={setPeople} />}
    </Container>
  );
}

export default App;
