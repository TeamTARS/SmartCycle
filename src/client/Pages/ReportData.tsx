import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  Divider
} from "@material-ui/core";
import React from "react";

export interface PopupProps {
  itemName: string;
  bin: string;
  openToastMessage: any;
}

export interface PopupState {
  open: boolean;
}

class ReportDataPopup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) {
    super(props);
    this.state = { open: false };

    this.togglePopup = this.togglePopup.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  togglePopup(e: React.KeyboardEvent | React.MouseEvent) {
    let open = this.state.open;
    this.setState({ ...this.state, open: !open });
  }

  onSubmit(e: React.KeyboardEvent | React.MouseEvent) {
    this.props.openToastMessage(
      "Thank you for submitting the correct label for this item!",
      "success"
    );
    this.togglePopup(e);
  }

  render() {
    return (
      <div>
        <Grid container justify="space-evenly" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={this.togglePopup}
            >
              {this.props.itemName}
            </Button>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            <p>
              <span className={`Bin-${this.props.bin}`}>{this.props.bin}</span>
            </p>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onClose={this.togglePopup}>
          <DialogTitle>Report Mislabeled Data</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please submit a report for an object that has been incorrectly
              labeled. We will only take the information needed to correct the
              error.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="label"
              label="Correct Label for Image"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.togglePopup} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ReportDataPopup;
