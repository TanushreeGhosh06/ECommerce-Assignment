import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name) return alert("Enter name");

    login(name);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="border p-6 rounded shadow w-80">

        <h1 className="text-xl mb-4 text-center">Login</h1>

        <input
          type="text"
          placeholder="Enter name"
          className="border w-full p-2 mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;