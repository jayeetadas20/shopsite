import React, { useState, useContext } from "react";
import "./css/LogSign.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login_Signup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { login, signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) {
        navigate("/shop");
      } else {
        setError("Invalid email or password.");
      }
    } else {
      signup(formData);
      navigate("/shop");
    }
  };

  return (
    <div className="Login_Signup">
      <div className="log_sign_div">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className="log_sign_fields" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btn">
            Continue
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login_Signup;
