import { useState, useRef, useEffect } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  // สร้าง ref สำหรับ input ชื่อพนักงาน
  const nameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !salary) {
      alert("กรุณากรอกให้ครบ");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      salary: parseFloat(salary),
    };

    addEmployee(newItem);
    setName("");
    setSalary("");

    // โฟกัสที่ input ชื่อพนักงานหลังจาก submit
    nameInputRef.current.focus();
  };

  // ใช้ useEffect เพื่อโฟกัสที่ input ชื่อพนักงานเมื่อหน้าโหลด
  useEffect(() => {
    nameInputRef.current.focus();
  }, []); // [] หมายถึงจะทำงานครั้งเดียวตอน mount หรือเปิดหน้าครั้งแรก

  return (
    <div className="handleForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อพนักงาน</label>
          {/* ผูก ref กับ input ชื่อพนักงาน */}
          <input
            type="text"
            ref={nameInputRef}  // เพิ่ม ref ที่นี่
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>เงินเดือน</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button type="submit">เพิ่มข้อมูล</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
