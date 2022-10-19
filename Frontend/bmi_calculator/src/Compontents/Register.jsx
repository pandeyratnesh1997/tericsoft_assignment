import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

import styles from '../Styled/form.module.css';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  }
  
  const handleRegister = async(e) =>{
    e.preventDefault();
    try {
        let response = await axios.post('http://localhost:5000/register', userDetails);
        
        toast({
            title : response.data.message,
            status : 'success',
            duration : 3000,
            isClosable : true
        })

    } catch (error) {
        console.log(error);
        toast({
            title : "Error in Register",
            status : 'error',
            duration : 3000,
            isClosable : true
        })
    }

  }

  return (
    <div className={styles.container}>
        <h2>Register</h2>
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
              onChange = {handleChange}
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
              onChange = {handleChange}
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
              onChange = {handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <input className={styles.submit} type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
