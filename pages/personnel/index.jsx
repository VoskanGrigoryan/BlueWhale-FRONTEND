import React from "react";
import Head from "next/head";
import styles from "../../styles/Personnel.module.css";
import NavigationBar from "../../components/navigation/Navbar";
import PersonnelGrid from "../../components/grids/PersonnelGrid";
import dummyData from "../../data.json";
import { Grid } from "@mui/material";
import EmployeeSummaryTable from "../../components/tables/EmployeeSummaryTable";

const Personnel = () => {
  const headers = ["User ID", "Username", "Email", "Roles", "Project", "Team"];
  const sideTableHeaders = ["User ID", "Username", "Status"];

  const selectedData = undefined;

  return (
    <div>
      <Head>
        <title>Personnel</title>
        <meta name="description" content="Personnel View" />
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
            lg={9}
            className={styles.tableContainer}
          >
            <PersonnelGrid headers={headers} data={dummyData} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            className={styles.sideTableContainer}
          >
            {selectedData ? (
              <EmployeeSummaryTable sideTableHeaders={sideTableHeaders} />
            ) : (
              <div className={styles.sideTableContainer}>
                <small>Select a row to see further details</small>
              </div>
            )}
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Personnel;
