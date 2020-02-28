import React from "react";
import { Link } from "react-router-dom";

export interface MenuProps {
  title: string;
  open: boolean;
}

class Menu extends React.Component<MenuProps, {}> {
  public static defaultProps = {
    title: "Menu",
    open: false
  };

  render() {
    return (
      <div className="Menu">
        <h1>{this.props.title}</h1>
        {/* <Drawer open={this.props.open}> */}
        <nav>
          {/* <List> component */}
          <ul>
            {/* All <li> should be <ListItem> components: https://material-ui.com/guides/composition/#react-router */}
            <li>
              {/* TODO: Switch Link to NavLink to allow styling */}
              {/* Need to contain <Icon> elements */}
              <Link to="/">Home</Link>
            </li>
            {/* <Divider /> */}
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {/* <Divider /> */}
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            {/* <Divider /> */}
            <li>
              <Link to="/feedback">Send Feedback</Link>
            </li>
            {/* <Divider /> */}
            <li>
              <Link to="/help">Help</Link>
            </li>
            {/* <Divider /> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
