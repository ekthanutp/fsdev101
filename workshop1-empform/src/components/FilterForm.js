import { useState, useRef, useEffect } from "react";
import "./FilterForm.css"; // 👉 เพิ่มไฟล์ CSS

const FilterForm = ({ onFilterChange, darkMode }) => {
  const [amount, setAmount] = useState(0);
  const [condition, setCondition] = useState("total");
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(0);
  const conditionRef = useRef();

  useEffect(() => {
    if (conditionRef.current) {
      conditionRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    onFilterChange({
      type: condition,
      value: parseFloat(amount),
      min: parseFloat(rangeMin),
      max: parseFloat(rangeMax),
    });
    conditionRef.current?.focus();
  };

  const handleRangeClick = () => {
    onFilterChange({
      type: "range",
      value: 0,
      min: parseFloat(rangeMin),
      max: parseFloat(rangeMax),
    });
    conditionRef.current?.focus();
  };

  return (
    <div className={`filter-form ${darkMode ? 'dark' : 'light'}`}>
      <label htmlFor="amount">เลือกจำนวนเงินและเงื่อนไขเพื่อ Filter</label>
      <div className="form-group">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="filterCon"
            value="total"
            checked={condition === "total"}
            onChange={(e) => setCondition(e.target.value)}
          />
          ทั้งหมด
        </label>
        <label>
          <input
            type="radio"
            name="filterCon"
            value="less"
            checked={condition === "less"}
            onChange={(e) => setCondition(e.target.value)}
          />
          น้อยกว่า
        </label>
        <label>
          <input
            type="radio"
            name="filterCon"
            value="more"
            checked={condition === "more"}
            onChange={(e) => setCondition(e.target.value)}
          />
          มากกว่า
        </label>
        <label>
          <input
            type="radio"
            name="filterCon"
            value="eq"
            checked={condition === "eq"}
            onChange={(e) => setCondition(e.target.value)}
          />
          เท่ากับ
        </label>
        <div>
        <input
          id="amount"
          type="number"
          ref={conditionRef}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <button className={`btn ${darkMode ? 'dark' : 'light'}`} onClick={handleClick}>
          เลือกค่า
        </button>
        </div>
      </div>
      </div>

      <div className="form-group range-group">
        <input
          type="number"
          placeholder="จาก"
          value={rangeMin}
          onChange={(e) => setRangeMin(e.target.value)}
          className="form-input"
        />
        <span className="range-separator">-</span>
        <input
          type="number"
          placeholder="ถึง"
          value={rangeMax}
          onChange={(e) => setRangeMax(e.target.value)}
          className="form-input"
        />
        <button className={`btn ${darkMode ? 'dark' : 'light'}`} onClick={handleRangeClick}>
          เลือกช่วงข้อมูล
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
