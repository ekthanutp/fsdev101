import { useState, useRef, useEffect } from "react";

const FilterForm = ({ onFilterChange }) => {
  const [amount, setAmount] = useState(0);
  const [condition, setCondition] = useState("total");
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(0);

  // สร้าง ref สำหรับ input condition
  const conditionRef = useRef();

  // ใช้ useEffect เพื่อให้ focus ที่ input เมื่อ component ทำการ mount
  useEffect(() => {
    if (conditionRef.current) {
      conditionRef.current.focus();  // เพิ่มการเช็คก่อนการโฟกัส
    }
  }, []); // [] ทำให้มันทำงานแค่ครั้งเดียวเมื่อ component mount

  const handleClick = () => {
    onFilterChange({
      type: condition,
      value: parseFloat(amount),
      min: parseFloat(rangeMin),
      max: parseFloat(rangeMax),
    });
    if (conditionRef.current) {
      conditionRef.current.focus();  // โฟกัสเมื่อคลิกปุ่ม
    }
  };

  const handleRangeClick = () => {
    onFilterChange({
      type: "range",
      value: 0,
      min: parseFloat(rangeMin),
      max: parseFloat(rangeMax),
    });
    if (conditionRef.current) {
      conditionRef.current.focus();  // โฟกัสเมื่อคลิกปุ่ม
    }
  };

  return (
    <>
      <div>
        <label>เลือกจำนวนเงินและเงื่อนไขเพื่อ Filter</label>
        <input
          type="number"
          ref={conditionRef}  // กำหนด ref ให้กับ input นี้
          value={amount}      // เพิ่ม value เพื่อควบคุมค่า
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <input
          type="radio"
          name="filterCon"
          value="total"
          checked={condition === "total"}
          onChange={(e) => setCondition(e.target.value)}
        />
        <label>ทั้งหมด</label>
        <input
          type="radio"
          name="filterCon"
          value="less"
          checked={condition === "less"}
          onChange={(e) => setCondition(e.target.value)}
        />
        <label>น้อยกว่า</label>
        <input
          type="radio"
          name="filterCon"
          value="more"
          checked={condition === "more"}
          onChange={(e) => setCondition(e.target.value)}
        />
        <label>มากกว่า</label>
        <input
          type="radio"
          name="filterCon"
          value="eq"
          checked={condition === "eq"}
          onChange={(e) => setCondition(e.target.value)}
        />
        <label>เท่ากับ</label>
        <input
          type="button"
          value="เลือกค่า"
          onClick={handleClick}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="จาก"
          value={rangeMin}
          onChange={(e) => setRangeMin(e.target.value)}
        />
        -
        <input
          type="number"
          placeholder="ถึง"
          value={rangeMax}
          onChange={(e) => setRangeMax(e.target.value)}
        />
        <button onClick={handleRangeClick}>เลือกช่วงข้อมูล </button>
      </div>
    </>
  );
};

export default FilterForm;
