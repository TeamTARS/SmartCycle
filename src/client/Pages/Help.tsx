import React from "react";

import Header from "./CommonComponents/Header";

class HelpPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="Help-Page">
        <Header title="Help" />
        <div className="Utils-Spacing">
          <h3 className="Title-Center">
            We provide you three ways to get results
          </h3>
          <p>
            <span className="Help-Bold">Camera(Recommended):</span> Point your
            camera to the trash to get real-time result <br />
            <span className="Help-Bold">Text:</span> Type in the trash name to
            find the right category <br />
            <span className="Help-Bold">Voice:</span> Press the microphone icon
            in the search bar and speak out the trash name clearly.
          </p>
          {/* <h3>
            Common recycling symbols in the Unites States(add several pictures
            below):
          </h3>
          <p>Placeholder for images here</p> */}
        </div>
      </div>
    );
  }
}

export default HelpPage;
