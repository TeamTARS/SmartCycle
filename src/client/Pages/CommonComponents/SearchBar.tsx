import { Container, IconButton, InputBase, Grid } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

class SearchBar extends React.Component<{}, {}> {
  render() {
    return (
      <div className="SearchBar">
        <Container className="SearchBar-Container">
          <SearchIcon className="SearchBar-IconButton" />
          <Autocomplete
            id="search-autocomplete"
            freeSolo
            options={itemList.sort((a, b) =>
              a.itemName.toLowerCase().localeCompare(b.itemName.toLowerCase())
            )}
            getOptionLabel={option => option.itemName}
            renderOption={option => (
              <React.Fragment>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <h4>{option.itemName}</h4>
                  </Grid>
                  <Grid item>
                    <span className={`Bin-${option.bin}`}>{option.bin}</span>
                  </Grid>
                </Grid>
              </React.Fragment>
            )}
            renderInput={params => (
              <InputBase
                ref={params.InputProps.ref}
                placeholder="Search…"
                inputProps={{ ...params.inputProps, "aria-label": "search" }}
                type="search"
                className="SearchBar-Input"
              />
            )}
            className="Autocomplete"
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

const itemList = [
  { itemName: "Plastic Bottle", bin: "Recycle" },
  { itemName: "Orange", bin: "Compost" },
  { itemName: "Plastic Bag", bin: "Landfill" },
  { itemName: "Banana", bin: "Compost" }
];
