import React from "react";

import Header from "./CommonComponents/Header";

export interface FeedbackPageProps {
  test: string;
}

class FeedbackPage extends React.Component<FeedbackPageProps, {}> {
  render() {
    return (
      <div className="Feedback-Page">
        <Header title="Send Feedback" />
        {/* Should be a form element */}
        <div className="Feedback-Form">
          <ul>
            {/* All <li> components should be replaced with FormControl components */}
            <li>
              <p>Name (InputLabel component)</p>
              <p>Placeholder for name field (TextField component)</p>
            </li>
            <li>
              <p>Email (InputLabel component)</p>
              <p>Placeholder for email field (TextField component)</p>
            </li>
            <li>
              <p>Reason (InputLabel component)</p>
              <p>Placeholder for reason dropdown (Select component)</p>
            </li>
            <li>
              <p>Message (InputLabel component)</p>
              <p>
                Placeholder for message field (TextField component with
                multiline prop)
              </p>
            </li>
          </ul>
          {/* <Button variant="contained" color="primary">Submit</Button> */}
          <p>Placeholder for button</p>
        </div>
      </div>
    );
  }
}

export default FeedbackPage;
