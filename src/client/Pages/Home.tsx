import { Button } from "@material-ui/core";
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
        </div>
        <Button>Report Mislabeled Data</Button>
      </div>
    );
  }
}

export default HomePage;
