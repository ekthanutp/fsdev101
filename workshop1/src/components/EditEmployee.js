import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditEmployee = ({ data, updateEmployee }) => {
  const { id } = useParams();  // ดึงค่า id จาก URL
  const navigate = useNavigate();  // ใช้สำหรับการเปลี่ยนเส้นทางหลังบันทึกข้อมูล

  // ค้นหาข้อมูลพนักงาน
  const employee = data.find((emp) => emp.id === parseInt(id));

  // เรียก useState เสมอโดยให้ค่าเริ่มต้นเป็น "" หรือค่าอื่น ๆ
  const [name, setName] = useState(employee ? employee.name : '');
  const [salary, setSalary] = useState(employee ? employee.salary : '');

  // ใช้ useEffect เพื่ออัปเดต state เมื่อ employee เปลี่ยน (เช่นข้อมูลมาถึงทีหลัง)
  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setSalary(employee.salary);
    }
  }, [employee]);

  // เมื่อไม่พบข้อมูลพนักงาน ให้แสดงข้อความ แต่ก่อนการ return นี้ Hooks ทั้งหมด
  if (!employee) {
    return <div>ไม่พบข้อมูลพนักงาน</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...employee, name, salary: parseFloat(salary) };
    updateEmployee(updatedEmployee);
    navigate('/');
  };

  return (
    <div>
      <h2>แก้ไขข้อมูลพนักงาน ID: {employee.id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อพนักงาน:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>เงินเดือน:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button type="submit">บันทึกการแก้ไข</button>
      </form>
    </div>
  );
};

export default EditEmployee;
