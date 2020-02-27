import React from "react";

export interface ItemCardProps {
  test: string;
}

class ItemCard extends React.Component<ItemCardProps, {}> {
  render() {
    return (
      <div className="ItemCard">
        <p>{this.props.test}</p>
        <p>Placeholder for all things item card</p>
      </div>
    );
  }
}

export default ItemCard;
