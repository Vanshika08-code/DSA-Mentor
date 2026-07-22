import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function checkBackend() {
    setMessage("Checking...");
    try {
    const res = await fetch("http://localhost:8000/health");;
      const data = await res.json();
      setMessage(`Backend says: ${data.status}`);
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  }

  return (
    <div>
      <button onClick={checkBackend}>Check backend</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
