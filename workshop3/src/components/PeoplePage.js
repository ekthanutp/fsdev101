import React, { useState, useRef } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const COLORS = [
    '#F9D5E5', '#FEC8D8', '#FFDFD3', '#D0F4DE', '#E4F9F5',
    '#C3FBD8', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#B5EAD7',
    '#B28DFF', '#D0AAFF', '#BDE0FE', '#A2D2FF'
  ];

const isDarkColor = (hex) => {
    if (!hex) return false;
    const c = hex.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness < 150;
};

function PeoplePage({ people, setPeople }) {
  const [newPerson, setNewPerson] = useState('');
  const [usedColors, setUsedColors] = useState([]);

  const inputRef = useRef(); // ✅ ref สำหรับ TextField

  const getRandomColor = () => {
    const availableColors = COLORS.filter(c => !usedColors.includes(c));
    if (availableColors.length === 0) return '#ccc';
    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    setUsedColors(prev => [...prev, randomColor]);
    return randomColor;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddPerson();
    }
  };

  const handleAddPerson = () => {
    if (newPerson.trim()) {
      const color = getRandomColor();
      setPeople([...people, { name: newPerson, color }]);
      setNewPerson('');
      inputRef.current?.focus(); // ✅ ให้โฟกัสช่องกรอกอีกครั้ง
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      {/* Input + Add Button */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id="standard-basic"
          label="เพิ่มเพื่อน"
          variant="standard"
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
          inputRef={inputRef} // ✅ ใส่ ref เข้าไป
          onKeyDown={handleKeyDown}
          sx={{ flexGrow: 1 }}
        />
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '50%',
            ml: 2,
            p: 0.5,
            '&:hover': { borderColor: '#1976d2' },
          }}
        >
          <IconButton color="primary" onClick={handleAddPerson}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      {/* รายชื่อคน */}
      <Box sx={{ mt: 3 }}>
        <h3>รายชื่อคนที่เพิ่ม:</h3>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {people.map((person, index) => {
            const isDark = isDarkColor(person.color);
            return (
              <li
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '0px solid #ccc',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: person.color,
                  color: isDark ? '#fff' : '#000',
                }}
              >
                {person.name}
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
}

export default PeoplePage;
