import { useState } from "react";
import Item from "./Item";
import './Transaction.css';

const Transaction = () => {
  const [data, setData] = useState([
    { id: 1, title: "สถานะพนักงาน 1", amount: 2000 },
    { id: 2, title: "สถานะพนักงาน 2", amount: 4000 },
    { id: 3, title: "สถานะพนักงาน 3", amount: 3000 },
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("กรุณากรอกให้ครบ");
      return;
    }

    const newItem = {
      id: data.length + 1,
      title,
      amount: parseFloat(amount),
    };

    setData([...data, newItem]);
    setTitle("");
    setAmount("");
  };

  const total = data.reduce((sum, e) => sum + e.amount, 0);
  const highEarners = data.filter((e) => e.amount > 3000);

  return (
    <>
      <h2>รวมยอดทั้งหมด: {total} บาท</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อตำแหน่งพนักงาน:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>เงินเดือน:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">เพิ่มข้อมูล</button>
      </form>

      <h3>พนักงานที่มีรายได้เกิน 3000:</h3>
      <ul className="item-list">
        {highEarners.map((e) => (
          <li key={e.id}>
            {e.title}: {e.amount}
          </li>
        ))}
      </ul>

      <ul className="item-list">
        {data.map((e) => (
          <Item {...e} key={e.id} />
        ))}
      </ul>
    </>
  );
};

export default Transaction;
