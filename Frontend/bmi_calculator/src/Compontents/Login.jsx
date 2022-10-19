import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styled/form.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    try {
      let response = await axios.post(
        "https://pure-meadow-80957.herokuapp.com/user/login",
        payload
      );

      localStorage.setItem("bmiAppToken", response.data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error in logged in please login  again");
    }
  };

  return (
    <div className={styles.container}>
      <Heading size={'md'}>Login</Heading>
      <form onSubmit={handleLogin}>
        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email id.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Password</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <input className={styles.submit} type="submit" value="Login" />
        </div>
        <div className={styles.row}>
            <p style={{margin: '10px'}}>Don't have account</p>
            <br />
            <Button style={{margin: '10px'}}><Link to='/register'>Go to Register</Link></Button>
        </div>

      </form>
    </div>
  );
};

export default Login;
