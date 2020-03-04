import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { Link } from "react-router-dom";

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
        {/* TODO: Add styling */}
        {this.props.showMenu ? (
          <Menu title={this.props.title} />
        ) : (
          <AppBar position="static">
            <Toolbar>
              <IconButton component={Link} to={this.props.navBackLink}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6">{this.props.title}</Typography>
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}

export default Header;
