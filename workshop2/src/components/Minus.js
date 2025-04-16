const Minus = ({ sendMinusValue }) => {
  const handleInputChange = (e) => {
    sendMinusValue(e.target.value);
  };

  return (
    <input
      type="number"
      placeholder="ป้อนค่าลบ"
      onChange={handleInputChange}
    />
  );
};

export default Minus;