import { useState } from "react";
import './ExerciseTracker.css'

function ExerciseTracker() {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [activities, setActivities] = useState([]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !count) return alert("กรุณากรอกข้อมูลให้ครบ");
  
    const newActivity = {
      id: Date.now(),
      name,
      count: parseInt(count),
      date: formatDate(Date.now()),  // เพิ่มวันที่ที่เพิ่มกิจกรรม
    };
  
    setActivities([...activities, newActivity]);
    setName("");
    setCount("");
  };

  const handleClear = () => {
    setActivities([]);
  };

  const handleClearLast = () => {
    setActivities((prev) => prev.slice(0,-1));
  };

  const handleClearFirst = () => {
    setActivities((prev) => prev.slice(1,prev.length));
  };


  const totalCount = activities.reduce((sum, a) => sum + a.count, 0);
  const totalList = activities.length

  return (
    <div>
      <h2>บันทึกการออกกำลังกาย</h2>
      <form onSubmit={handleSubmit}>
        <select value={name} onChange={(e) => setName(e.target.value)}>
            <option value="">-- เลือกกิจกรรม --</option>
            <option value="Push-up">Push-up</option>
            <option value="Sit-up">Sit-up</option>
            <option value="Running">Running</option>
            <option value="Jump Rope">Jump Rope</option>
        </select>
        <input
          type="number"
          placeholder="จำนวนครั้ง"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <div className="btn-activity">
            <button type="submit">เพิ่มกิจกรรม</button>
            <button type="button" onClick={handleClear}>ลบกิจกรรมทั้งหมด</button>
            <button type="button" onClick={handleClearFirst}>ลบกิจกรรมรายการแรก</button>
            <button type="button" onClick={handleClearLast}>ลบกิจกรรมรายการสุดท้าย</button>
        </div>
        
      </form>

        <h3>รายการที่บันทึกไว้:</h3>
        <ul>
            {activities.map((act) => (
                <li key={act.id}>
                ID {act.id} : {act.name} - {act.count} ครั้ง - {act.date}
                </li>
            ))}
        </ul>

      <h4>รวมทั้งหมด: {totalCount} ครั้ง</h4>
      <h4>รายการทั้งหมด: {totalList} รายการ</h4>
    </div>
  );
}

export default ExerciseTracker;
