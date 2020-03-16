import { Divider, Grid, Switch } from "@material-ui/core";
import React from "react";

import Header from "./CommonComponents/Header";

class SettingsPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="Settings-Page">
        <Header title="Settings" />
        <div className="Settings-System-Permissions Utils-Spacing">
          <h3>System Permissions</h3>
          <Divider />
          <Grid container>
            <Grid item xs={9}>
              <p>Camera</p>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs className="Settings-Switch">
              <Switch size="small" color="primary" />
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={9}>
              <p>Microphone</p>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs className="Settings-Switch">
              <Switch size="small" color="primary" />
            </Grid>
          </Grid>
          <Divider />
        </div>
        <div className="Settings-Display Utils-Spacing">
          <h3>Display</h3>
          <Divider />
          <Grid container>
            <Grid item xs={9}>
              <p>Dark Mode</p>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs className="Settings-Switch">
              <Switch size="small" color="primary" />
            </Grid>
          </Grid>
          <Divider />
        </div>
      </div>
    );
  }
}

export default SettingsPage;
