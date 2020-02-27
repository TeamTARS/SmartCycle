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
        <div className="Feedback-Form">
          <ul>
            <li>
              <p>Name</p>
              <p>Placeholder for name field</p>
            </li>
            <li>
              <p>Email</p>
              <p>Placeholder for email field</p>
            </li>
            <li>
              <p>Reason</p>
              <p>Placeholder for reason dropdown</p>
            </li>
            <li>
              <p>Message</p>
              <p>Placeholder for message field</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackPage;
