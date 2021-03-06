import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/Personnel.module.css";
import { Box, Divider, Typography } from "@mui/material";
import { personnelColumns } from "./columns";

const PersonnelGrid = ({ data }) => {
  const getColumnData = (e) => {
    console.log(e.row);
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
            columns={personnelColumns}
            onRowClick={getColumnData}
          />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          error
          disableColumnMenu
          autoPageSize
          columns={personnelColumns}
        />
      )}
    </div>
  );
};

export default PersonnelGrid;
