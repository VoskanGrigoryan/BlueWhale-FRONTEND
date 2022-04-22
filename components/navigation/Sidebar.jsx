import * as React from "react";
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import {
  PeopleAltRounded,
  ContentPasteSearch,
  HomeRounded,
} from "@mui/icons-material";
import styles from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";

export default function TemporaryDrawer({ drawerState, setDrawerState }) {
  const router = useRouter();

  return (
    <Drawer
      key={"anchor"}
      anchor={"left"}
      open={drawerState}
      onClose={() => {
        setDrawerState(false);
      }}
    >
      <div className={styles.drawer}>
        <ListItem className={styles.drawerHeader}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            style={{ marginBottom: 0, fontWeight: 500 }}
          >
            ERP System
          </Typography>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setDrawerState(false);
            router.push("/dashboard");
          }}
        >
          <ListItemIcon>
            <HomeRounded />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          key="personnel"
          onClick={() => {
            setDrawerState(false);
            router.push("/personnel");
          }}
        >
          <ListItemIcon>
            <PeopleAltRounded />
          </ListItemIcon>
          <ListItemText primary="Personnel" />
        </ListItem>
        <ListItem
          button
          key="as"
          onClick={() => {
            setDrawerState(false);
            router.push("/resources");
          }}
        >
          <ListItemIcon>
            <ContentPasteSearch />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
      </div>
      <small className={styles.footer}>Version 0.1</small>
    </Drawer>
  );
}
