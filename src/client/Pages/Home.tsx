import { Fab } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import React from "react";

import CameraView from "./CommonComponents/Camera/CameraView";
import Header from "./CommonComponents/Header";
import SearchBar from "./CommonComponents/SearchBar";

export interface HomePageProps {
  test: string;
}

class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div className="Home-Page">
        <Header title="SmartRecycle" />
        <SearchBar />
        <div className="Camera-View">
          <CameraView />
          <Fab>
            <CameraAltIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default HomePage;
