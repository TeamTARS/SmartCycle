import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import React from "react";

export interface PopupState {
  open: boolean;
}

class ReportDataPopup extends React.Component<{}, PopupState> {
  constructor(props: {}) {
    super(props);
    this.state = { open: false };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup(e: React.KeyboardEvent | React.MouseEvent) {
    let open = this.state.open;
    this.setState({ ...this.state, open: !open });
  }

  render() {
    return (
      <div className="ReportData-Popup">
        <Button variant="contained" color="primary" onClick={this.togglePopup}>
          Report
        </Button>
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
            <Button onClick={this.togglePopup} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ReportDataPopup;
