import { InputBase } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

export interface SearchBarProps {
  test: string;
}

class SearchBar extends React.Component<SearchBarProps, {}> {
  render() {
    return (
      <div>
        {/* TODO: Add styling */}
        <div>
          <p>Placeholder for search bar</p>
          <div>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <MicIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
