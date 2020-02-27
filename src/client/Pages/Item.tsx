import React from "react";

import Header from "./CommonComponents/Header";

export interface ItemPageProps {
  itemName: string;
}

class ItemPage extends React.Component<ItemPageProps, {}> {
  render() {
    return (
      <div className="Item-Page">
        <Header
          title={this.props.itemName}
          showMenu={false}
          navBackLink="/results"
        />
        <p>Placeholder for item image</p>
        <div className="Item-Description">
          <h3>{this.props.itemName}</h3>
          <p className="Item-Recycling-Category">Recycling Category</p>
          <p>Description of item and how to recycle.</p>
        </div>
      </div>
    );
  }
}

export default ItemPage;
