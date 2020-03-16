import { Container, IconButton, InputBase } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

class SearchBar extends React.Component<{}, {}> {
  render() {
    return (
      <div className="SearchBar">
        <Container className="SearchBar-Container">
          <SearchIcon className="SearchBar-IconButton" />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            className="SearchBar-Input"
          />
          <IconButton className="SearchBar-IconButton">
            <MicIcon />
          </IconButton>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
