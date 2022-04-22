import React from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import styles from "../../styles/Personnel.module.css";

const EmployeeSummaryTable = ({ sideTableHeaders }) => {
  return (
    <TableContainer className={styles.sideTableContainer}>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell variant="head">User ID</TableCell>
            <TableCell>Cell 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Username</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Status</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Last active</TableCell>
            <TableCell>Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Current task</TableCell>
            <TableCell>Cell 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">Supervisor</TableCell>
            <TableCell>Cell 6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              variant="head"
              style={{
                paddingLeft: "12px",
                paddingTop: "4px",
                paddingBottom: "4px",
              }}
            >
              <Button size="small">
                <small>More info</small>
              </Button>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeSummaryTable;
