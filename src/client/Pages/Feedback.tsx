import React from "react";

import Header from "./CommonComponents/Header";
import { TextField, MenuItem, Button } from "@material-ui/core";

class FeedbackPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="Feedback-Page">
        <Header title="Send Feedback" />
        <p className="Utils-Spacing">
          We are more than happy to hear from you. Please submit your feedback
          here and if you would like us to reach back out to you, please leave
          your email address. Thank you from Team TARS.
        </p>
        <form className="FeedbackForm Utils-Spacing">
          <TextField
            id="name"
            label="Name"
            fullWidth
            className="FeedbackForm-Field"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            className="FeedbackForm-Field"
          />
          <TextField
            id="reason"
            label="Reason"
            select
            fullWidth
            className="FeedbackForm-Field"
          >
            <MenuItem key={0} value="Praise">
              Praise
            </MenuItem>
            <MenuItem key={1} value="Bug">
              Found Bug
            </MenuItem>
            <MenuItem key={2} value="Support">
              Support Needed
            </MenuItem>
            <MenuItem key={3} value="Other">
              Other
            </MenuItem>
          </TextField>
          <TextField
            id="message"
            label="Message"
            rows={6}
            multiline
            fullWidth
            className="FeedbackForm-Field"
          />
          <div className="FeedbackForm-Button">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default FeedbackPage;
