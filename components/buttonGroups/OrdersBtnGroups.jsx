import React from "react";
import { Button } from "@mui/material";
import styles from "../../styles/Orders.module.css";

const OrdersBtnGroups = ({ props }) => {
  console.log(props);
  return (
    <>
      <Button
        variant="contained"
        size="small"
        className={styles.tableMenuButton}
      >
        Details
      </Button>

      <Button
        variant="contained"
        color="success"
        size="small"
        className={styles.tableMenuButton}
      >
        Approve
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        className={styles.tableMenuButton}
      >
        Report
      </Button>
    </>
  );
};

export default OrdersBtnGroups;
