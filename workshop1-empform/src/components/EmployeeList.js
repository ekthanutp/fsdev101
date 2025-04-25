import { Link } from "react-router-dom";
import "./EmployeeList.css"; // เราจะใช้ไฟล์นี้สำหรับ CSS

const EmployeeList = ({ employeeList, deleteEmployee }) => {
  return (
    <div className="employee-list-container">
      <h2>รายชื่อพนักงาน</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ชื่อพนักงาน</th>
            <th>เงินเดือน (บาท)</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.salary.toLocaleString()}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="edit-btn">แก้ไข</Link>
                <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
