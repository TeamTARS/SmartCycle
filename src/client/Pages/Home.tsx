import React from "react";

import Header from "./CommonComponents/Header";
import SearchBar from "./CommonComponents/SearchBar";

export interface HomePageProps {
  test: string;
}

class HomePage extends React.Component<HomePageProps, {}> {
  render() {
    return (
      <div className="Home-Page">
        <Header title="Home Page Header" />
        <SearchBar test="Home Page Search Bar" />
        <div className="Partial-Results">
          <h3>Home Page Partial Results</h3>
          <p>Home Page Partial Results List</p>
        </div>
        <div className="Camera-View">
          <p>Placeholder for camera view</p>
          <p>Placeholder for camera button</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
