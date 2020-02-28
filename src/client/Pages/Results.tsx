import React from "react";

import Header from "./CommonComponents/Header";
import ItemCard from "./CommonComponents/ItemCard";
import SearchBar from "./CommonComponents/SearchBar";

export interface ResultsPageProps {
  test: string;
}

class ResultsPage extends React.Component<ResultsPageProps, {}> {
  render() {
    return (
      <div className="Results-Page">
        <Header title="Results" showMenu={false} navBackLink="/" />
        <SearchBar test="Search Bar" />
        {/* <List> component with maybe a <ListItem> component */}
        <ul>
          <li>
            <ItemCard test="Results Page Item Cards 1" />
          </li>
          <li>
            <ItemCard test="Results Page Item Cards 2" />
          </li>
        </ul>
      </div>
    );
  }
}

export default ResultsPage;
