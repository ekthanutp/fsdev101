const Plus = ({ sendPlusValue }) => {
  const handleInputChange = (e) => {
    sendPlusValue(e.target.value);
  };

  return (
    <input
      type="number"
      placeholder="ป้อนค่าบวก"
      onChange={handleInputChange}
    />
  );
};

export default Plus;
