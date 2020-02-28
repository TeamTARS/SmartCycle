import React from "react";

export interface ItemCardProps {
  test: string;
}

class ItemCard extends React.Component<ItemCardProps, {}> {
  render() {
    return (
      <div className="ItemCard">
        {/* <Card> */}
        {/* <CardMedia> */}
        {/* <CardContent> */}
        {/* <Typography> for all the text */}
        {/* Try and figure out how to make the entire card clickable. Maybe <CardActionArea> */}
        <p>{this.props.test}</p>
        <p>Placeholder for all things item card</p>
      </div>
    );
  }
}

export default ItemCard;
