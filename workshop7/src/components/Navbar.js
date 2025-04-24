import { Link } from 'react-router-dom';
const Navbar =()=>{

    return(
        <>
      <Link to="/" style={{ marginRight: '10px' }}>หน้าหลัก</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>เกี่ยวกับฉัน</Link>
      <Link to="/contact" style={{ marginRight: '10px' }}>ติดต่อฉัน</Link>
        </>
    )
}

export default Navbar