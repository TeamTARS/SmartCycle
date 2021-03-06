import { Grid, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

import CameraView from "./CommonComponents/Camera/CameraView";
import Header from "./CommonComponents/Header";
import SearchBar from "./CommonComponents/SearchBar";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class HomePage extends React.Component<
  {},
  { isToastMessageOpen: boolean; toastMessage: string; alertSeverity: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isToastMessageOpen: false,
      toastMessage: "",
      alertSeverity: ""
    };
  }

  openToastMessage(message: string, severity: string) {
    this.setState({
      isToastMessageOpen: true,
      toastMessage: message,
      alertSeverity: severity
    });
  }

  closeToastMessage() {
    this.setState({
      isToastMessageOpen: false
    });
  }

  render() {
    return (
      <div className="HomePage">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          className="HomePage-Grid"
        >
          <Grid item>
            <Header title="SmartRecycle" />
          </Grid>
          <Grid item>
            <SearchBar />
            <Snackbar
              open={this.state.isToastMessageOpen}
              autoHideDuration={3000}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              onClose={this.closeToastMessage.bind(this)}
            >
              <Alert
                onClose={this.closeToastMessage.bind(this)}
                severity={this.state.alertSeverity}
              >
                {this.state.toastMessage}
              </Alert>
            </Snackbar>
          </Grid>
          <CameraView openToastMessage={this.openToastMessage.bind(this)} />
        </Grid>
      </div>
    );
  }
}

export default HomePage;
