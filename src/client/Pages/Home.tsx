import { Grid } from "@material-ui/core";
import React from "react";

import CameraView from "./CommonComponents/Camera/CameraView";
import Header from "./CommonComponents/Header";
import SearchBar from "./CommonComponents/SearchBar";

class HomePage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="Home-Page">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Header title="SmartRecycle" />
          </Grid>
          <Grid item>
            <SearchBar />
          </Grid>
          <CameraView />
        </Grid>
      </div>
    );
  }
}

export default HomePage;
