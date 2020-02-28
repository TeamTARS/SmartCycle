import React from "react";

export interface SearchBarProps {
  test: string;
}

class SearchBar extends React.Component<SearchBarProps, {}> {
  render() {
    return (
      <div>
        {/* <Icon>Search</Icon> https://material-ui.com/components/material-icons/ */}
        {/* <InputBase> for better styling */}
        {/* <Icon>Mic</Icon> https://material-ui.com/components/material-icons/ */}
        <p>Placeholder for search bar</p>
      </div>
    );
  }
}

export default SearchBar;
