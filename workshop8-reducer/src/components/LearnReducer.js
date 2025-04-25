import { useReducer } from "react";

const initialState = {
  count: 0,
  username: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "set_username":
      return { ...state, username: action.payload };
    case "clear_name":
      return { ...state, username: "" };
    default:
      return state;
  }
};

const LearnReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        {state.username && (
          <label>
            สวัสดีคุณ {state.username} | คุณกดไปทั้งหมด : {state.count} ครั้ง{" "}
          </label>
        )}
      </div>



      {state.username === "" && state.count > 0 && (
        <p style={{ color: "blue" }}>
          เก่งมากเลยคุณคุณกดไปทั้งสิ้น{" "}
          {state.count} ครั้ง
        </p>
      )}

      <div>
        <input
          type="text"
          placeholder="กรอกชื่อของคุณ"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: "set_username", payload: e.target.value })
          }
        />
      </div>
      <button onClick={() => dispatch({ type: "increase" })}>เพิ่ม</button>
      <button onClick={() => dispatch({ type: "decrease" })}>ลด</button>
      <button onClick={() => dispatch({ type: "reset" })}>รีเซ็ท</button>
      <button onClick={() => dispatch({ type: "clear_name" })}>
        ลบชื่อออก
      </button>

      {state.count > 10 && <p style={{ color: "green" }}>คุณกดเยอะมากเลยนะ!</p>}
      {state.count < -1 && <p style={{ color: "red" }}>เหมือนคุณจะกดผิดปุ่มเลยนะ!</p>}
    </>
  );
};

export default LearnReducer;
