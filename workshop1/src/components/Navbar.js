import { Link } from 'react-router-dom';
import './Navbar.css';  // นำเข้า CSS สำหรับ Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyApp</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">หน้าหลัก</Link>
        </li>
        <li>
          <Link to="/add" className="nav-link">เพิ่มข้อมูล</Link>
        </li>
        <li>
          <Link to="/edit/:id" className="nav-link">แก้ไขข้อมูล</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
