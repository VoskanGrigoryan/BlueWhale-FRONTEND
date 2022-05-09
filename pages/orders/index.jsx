import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Orders.module.css";
import NavigationBar from "../../components/navigation/Navbar";
import OrdersGrid from "../../components/grids/OrdersGrid";
import { Grid } from "@mui/material";
import dummyData from "../../data.json";
import OrdersBtnGroups from "../../components/buttonGroups/OrdersBtnGroups";

const Orders = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div>
      <Head>
        <title>Orders</title>
        <meta name="description" content="Orders View" />
        <link rel="icon" href="/whaleLogo.png" />
      </Head>

      <main className={styles.main}>
        <NavigationBar />

        <Grid container className={styles.gridContainer}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={styles.tableMenu}
          >
            <OrdersBtnGroups
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={styles.tableContainer}
          >
            <OrdersGrid
              data={dummyData}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
            />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Orders;
