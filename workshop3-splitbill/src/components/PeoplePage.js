import React, { useState, useRef } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const COLORS = [
    '#F9D5E5', '#FEC8D8', '#FFDFD3', '#D0F4DE', '#E4F9F5',
    '#C3FBD8', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#B5EAD7',
    '#B28DFF', '#D0AAFF', '#BDE0FE', '#A2D2FF','#000255'
  ];

const isDarkColor = (hex) => {
  if (!hex || typeof hex !== 'string') return '#000000';

  // Normalize shorthand hex to full form
  let normalizedHex = hex.startsWith('#') ? hex.slice(1) : hex;
  if (normalizedHex.length === 3) {
    normalizedHex = normalizedHex.split('').map((c) => c + c).join('');
  }
  if (normalizedHex.length !== 6) return '#000000'; // fallback if invalid

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness < 150
};

function PeoplePage({ people, setPeople }) {
  const [newPerson, setNewPerson] = useState('');
  const [usedColors, setUsedColors] = useState([]);

  const inputRef = useRef(); //ref สำหรับ TextField ใช้ focus

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
      inputRef.current?.focus();
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id="standard-basic"
          label="เพิ่มเพื่อน"
          variant="standard"
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
          inputRef={inputRef}
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
            const textColor = isDark ? '#f5f5f5' : '#212121';
            return (
              <li
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '8px',
                padding: '6px 12px',
                marginRight: '8px',
                marginBottom: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                backgroundColor: person.color,
                color: textColor,
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
