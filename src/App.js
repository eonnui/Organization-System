import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container">
      {showLogin ? <Login toggleForm={() => setShowLogin(false)} /> : <Register toggleForm={() => setShowLogin(true)} />}
    </div>
  );
}

export default App;
