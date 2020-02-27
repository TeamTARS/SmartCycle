import React from "react";

import Menu from "./Menu";

export interface HeaderProps {
  title: string;
  showMenu: boolean;
  navBackLink: string;
}

class Header extends React.Component<HeaderProps, {}> {
  public static defaultProps = {
    title: "SmartCycle",
    showMenu: true,
    navBackLink: ""
  };

  render() {
    return (
      <div className="Header">
        {this.props.showMenu ? (
          <Menu />
        ) : (
          <p>Go Back to {this.props.navBackLink}</p>
        )}
      </div>
    );
  }
}

export default Header;
