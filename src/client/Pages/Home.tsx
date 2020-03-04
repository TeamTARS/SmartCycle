import { Fab } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import React from "react";
import { Link } from "react-router-dom";

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
          <p>Placeholder for camera view</p>
          <Fab component={Link} to="/results">
            <CameraAltIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default HomePage;
