import React from "react";
import { useState } from "react";
import styles from "../Styled/form.module.css";
import axios from "axios";
import { useEffect } from "react";


import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import Profile from "./Profile";

const HomePage = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [allBmiData, setAllBmiData] = useState([]);
  const [user, setUser] = useState({})

 

  const handleBmi = async (e) => {
    e.preventDefault();
    const payload = {
      weight,
      height,
    };

    try {
      const res =  await axios.post("https://pure-meadow-80957.herokuapp.com/bmi/create", payload, {
        headers: {
          authorisation: `Bearear ${localStorage.getItem("bmiAppToken")}`,
        },
      });
      console.log(res);
        
  
      getCalculation()
    } catch (error) {
      console.log(error);
    }
  };

  const getCalculation = async () => {
    try {
      const res = await axios.get("https://pure-meadow-80957.herokuapp.com/bmi", {
        headers: {
          authorisation: `Bearear ${localStorage.getItem("bmiAppToken")}`,
        },
      });
      setAllBmiData(res.data.Bmidata);
      setUser(res.data.user)
    } catch (error) {
      console.log(error);
    }
  };

 
  
  useEffect(() => {
    getCalculation();
   
  }, []);

  return (
    <div>
      <Profile {...user}/>

      <div className={styles.container}>
        
        <Heading size={'md'}>Bmi Form</Heading>
        <form onSubmit={handleBmi}>
          <div className={styles.row}>
            <div className={styles.label_column}>
              <label className={styles.label}>Weight (kgs)</label>
            </div>
            <div className={styles.input_column}>
              <input
                className={styles.input}
                type="number"
                placeholder="Enter your Weight in kgs.."
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label_column}>
              <label className={styles.label}>Height (in feet)</label>
            </div>
            <div className={styles.input_column}>
              <input
                className={styles.input}
                type="number"
                placeholder="Enter your Height in feet.."
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <input className={styles.submit} type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className={styles.table_container}>
        <Heading size={'md'}>Bmi Report</Heading>
        <TableContainer >
          <Table variant="simple" className={styles.Table}>
           
            <Thead>
              <Tr>
                <Th>Weight (kgs)</Th>
                <Th>Height (meter)</Th>
                <Th>BMI</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allBmiData?.map((item)=>{
                return(
                <Tr key={item._id}>
                  <Td>{item.weight}</Td>
                  <Td>{item.height.toFixed(2)}</Td>
                  <Td>{item.bmi}</Td>
                </Tr>
                )
              })}
              
              
            </Tbody>
            
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default HomePage;
