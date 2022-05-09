import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../../styles/Orders.module.css";
import { Box, Divider, Typography } from "@mui/material";
import { ordersColumns } from "./columns";

const OrdersGrid = ({ data }) => {
  const getColumnData = (e) => {
    console.log(e.row);
  };
  return (
    <div className={styles.tableContainer}>
      {ordersColumns.length > 0 ? (
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
            columns={ordersColumns}
            onRowClick={getColumnData}
          />
        </Box>
      ) : (
        <DataGrid
          rows={rows}
          error
          disableColumnMenu
          autoPageSize
          columns={ordersColumns}
        />
      )}
    </div>
  );
};

export default OrdersGrid;
