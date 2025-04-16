import { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";

function App() {
  const [plusVal, setPlusVal] = useState(0);
  const [minusVal, setMinusVal] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    setResult(Number(plusVal) + Number(minusVal));
  };

  return (
    <>
      <h1>ผลรวม: {result}</h1>
      <button onClick={handleCalculate}>คำนวณ</button>
      <Plus sendPlusValue={setPlusVal} />
      <Minus sendMinusValue={setMinusVal} />
    </>
  );
}

export default App;
