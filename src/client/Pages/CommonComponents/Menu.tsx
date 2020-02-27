import React from "react";
import { Link } from "react-router-dom";

export interface MenuProps {
  title: string;
}

class Menu extends React.Component<MenuProps, {}> {
  public static defaultProps = {
    title: "Menu"
  };

  render() {
    return (
      <div className="Menu">
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li>
              {/* TODO: Switch Link to NavLink to allow styling */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/feedback">Send Feedback</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
