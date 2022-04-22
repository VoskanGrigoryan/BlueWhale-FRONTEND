import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/Personnel.module.css";
import { Box, Divider, Typography } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "headerStyle--header",
  },
  {
    field: "user_name",
    headerName: "Username",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "roles",
    headerName: "Roles",
    sortable: false,
    description: "User's current roles",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "project",
    headerName: "Project",
    description: "Project asigned to the user",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "team",
    headerName: "Team",
    description: "Team asigned to the user",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
];

const PersonnelGrid = ({ data }) => {
  const getColumnData = (e) => {
    console.log(e.row);

    const columnData = e.row;
  };
  return (
    <div className={styles.tableContainer}>
      <Divider textAlign="left" style={{ paddingBottom: "5px" }}>
        <Typography variant="h5">Personnel Dashboard</Typography>
      </Divider>
      {data.length > 0 ? (
        <Box
          sx={{
            height: 454,
            width: 1,
            "& .headerStyle--header": {
              backgroundColor: "primary.main",
              color: "white",
              border: "red",
            },

            "& .MuiDataGrid-row:hover": {
              color: "primary.main",
              cursor: "pointer",
            },
          }}
        >
          <DataGrid
            rows={data}
            rowSpacingType="border"
            disableColumnMenu
            density="compact"
            autoPageSize
            columns={columns}
            onRowClick={getColumnData}
          />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          error
          disableColumnMenu
          autoPageSize
          columns={columns}
        />
      )}
    </div>
  );
};

export default PersonnelGrid;
