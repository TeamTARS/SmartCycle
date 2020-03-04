import { Container, IconButton, InputBase } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

class SearchBar extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        {/* TODO: Add styling */}
        <Container>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton>
            <MicIcon />
          </IconButton>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
