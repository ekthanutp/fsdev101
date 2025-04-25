import React, { useState } from 'react';

const ActorForm = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    nationality: '',
    is_active: true
  });

  // ฟังก์ชันที่ใช้จัดการเมื่อมีการเปลี่ยนแปลงใน input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ฟังก์ชันที่ใช้จัดการเมื่อ submit ฟอร์ม
  const handleSubmit = async (e) => {
    e.preventDefault();  // หยุดการรีเฟรชหน้าเมื่อ submit

    try {
      const res = await fetch('http://localhost:5050/api/actors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)  // ส่งข้อมูล form ไปในรูปแบบ JSON
      });

      const data = await res.json();
      if (res.ok) {
        alert('เพิ่มนักแสดงเรียบร้อยแล้ว!');
        console.log('Inserted:', data);
      } else {
        alert('เกิดข้อผิดพลาดในการเพิ่ม');
        console.error(data);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>เพิ่มนักแสดง</h2>
      <input 
        type="text" 
        name="first_name" 
        placeholder="ชื่อจริง" 
        value={form.first_name} 
        onChange={handleChange} 
        required 
      />
      <br />
      <input 
        type="text" 
        name="last_name" 
        placeholder="นามสกุล" 
        value={form.last_name} 
        onChange={handleChange} 
        required 
      />
      <br />
      <input 
        type="date" 
        name="birth_date" 
        value={form.birth_date} 
        onChange={handleChange} 
        required 
      />
      <br />
      <input 
        type="text" 
        name="nationality" 
        placeholder="สัญชาติ" 
        value={form.nationality} 
        onChange={handleChange} 
        required 
      />
      <br />
      <label>
        ยังแสดงอยู่?
        <input 
          type="checkbox" 
          name="is_active" 
          checked={form.is_active} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">บันทึก</button>
    </form>
  );
};

export default ActorForm;
