import React from "react";

export interface SearchBarProps {
  test: string;
}

class SearchBar extends React.Component<SearchBarProps, {}> {
  render() {
    return (
      <div>
        <p>Placeholder for search bar</p>
      </div>
    );
  }
}

export default SearchBar;
