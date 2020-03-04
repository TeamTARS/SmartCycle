import { Fab } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import React from "react";

import Header from "./CommonComponents/Header";
import SearchBar from "./CommonComponents/SearchBar";
import CameraView from "../camera/CameraView";

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
          <p>Placeholder for camera view</p>
          <Fab>
            <CameraAltIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default HomePage;
