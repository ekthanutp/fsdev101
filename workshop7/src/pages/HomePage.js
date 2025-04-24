import { useAuth } from "../context/AuthContext";
const HomePage = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div>
      <h1>Home Page</h1>
      <p>{isLoggedIn ? "คุณล็อกอินแล้ว" : "คุณยังไม่ได้ล็อกอิน"}</p>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default HomePage;
