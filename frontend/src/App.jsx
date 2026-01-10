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
    <div style={styles.container}>
      <h2>Welcome 👋</h2>

      <div style={styles.buttonBox}>
        <button onClick={() => setPage("login")} style={styles.button}>
          Login
        </button>
        <button onClick={() => setPage("signup")} style={styles.button}>
          Signup
        </button>
      </div>

      {page === "login" && <Login setIsLoggedIn={setIsLoggedIn} />}
      {page === "signup" && <Signup />}
    </div>
  );
}

export default App;
