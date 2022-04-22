import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  TableSortLabel,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFDD0",
    fontWeight: "bold",
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const PersonnelTable = ({ headers, data }) => {
  // const getRoles = () => {
  //   // const roles_values = data.map(function (role, index) {
  //   //   console.log(role);
  //   //   return role;
  //   // });

  //   data.forEach(function (value) {
  //     const roles = value.roles;
  //     roles.map(function (role, index) {
  //       if (role.admin === true) {
  //         roles.admin = "Admin";
  //       }
  //       if (role.developer === true) {
  //         roles.developer = "Developer";
  //       }
  //       if (role.functional === true) {
  //         roles.functional = "Functional";
  //       }
  //     });
  //   });
  // };

  const userData = [...data];

  let userRoles = () => {
    userData.forEach((element) => {
      // element.roles.map((role) => {
      //   // let userRole = JSON.stringify(role);

      //   console.log(userRole);
      // });
      // console.log(data.roles.join(", "));
      let roles = element.roles.join(", ");
      element.roles.userRoles = roles;
    });
  };

  userRoles();

  const [orderDirection, setOrderDirection] = useState("asc");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {headers.map((column, index) => {
              return (
                <StyledTableCell align="center" key={index}>
                  <TableSortLabel direction="asc" active={column}>
                    {column}
                  </TableSortLabel>
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="center">{row.user_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.roles.userRoles}</TableCell>
              <TableCell align="center">{row.project}</TableCell>
              <TableCell align="center">{row.team}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonnelTable;
