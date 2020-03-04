import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { Link } from "react-router-dom";

export interface MenuProps {
  title: string;
}

export interface MenuState {
  open?: boolean;
}

class Menu extends React.Component<MenuProps, MenuState> {
  public static defaultProps = {
    title: "Menu"
  };

  constructor(props: MenuProps) {
    super(props);
    this.state = { open: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e: React.KeyboardEvent | React.MouseEvent) {
    let open = this.state.open;
    this.setState({ ...this.state, open: !open });
  }

  render() {
    return (
      <div className="Menu">
        {/* TODO: Add styling */}
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleMenu}>
              <MenuIcon />
            </IconButton>
            {/* TODO: Figure out how to center text */}
            <Typography variant="h6">{this.props.title}</Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClick={this.toggleMenu}>
          <div>
            <AppBar position="relative">
              <Toolbar>
                <IconButton onClick={this.toggleMenu}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" align="center">
                  Menu
                </Typography>
              </Toolbar>
            </AppBar>
            <nav>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/about">
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText>About Us</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/settings">
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/feedback">
                  <ListItemIcon>
                    <AnnouncementIcon />
                  </ListItemIcon>
                  <ListItemText>Send Feedback</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/help">
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText>Help</ListItemText>
                </ListItem>
                <Divider />
              </List>
            </nav>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Menu;
