import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../Styled/form.module.css";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://pure-meadow-80957.herokuapp.com/user/register",
        userDetails
      );

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error in Register");
    }
  };

  return (
    <div className={styles.container}>
      <Heading size={"md"}>Register</Heading>
      <form onSubmit={handleRegister}>
        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Name</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your name.."
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email id.."
              name="email"
              value={userDetails.email}
              onChange={handleChange}
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
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <input className={styles.submit} type="submit" value="Register" />
        </div>
        <div className={styles.row}>
            <p style={{margin: '10px'}}>Already Registered</p>
            <br />
            <Button style={{margin: '10px'}}><Link to='/login'>Go to Login</Link></Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
