import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("login"); // login | signup

  if (isLoggedIn) {
    return <Home setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div>
      <h2>Welcome 👋</h2>

      <div>
        <button onClick={() => setPage("login")} >
          Login
        </button>
        <button onClick={() => setPage("signup")}>
          Signup
        </button>
      </div>

      {page === "login" && <Login setIsLoggedIn={setIsLoggedIn} />}
      {page === "signup" && <Signup />}
    </div>
  );
}

export default App;
