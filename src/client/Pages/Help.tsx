import React from "react";

import Header from "./CommonComponents/Header";

export interface HelpPageProps {
  test: string;
}

class HelpPage extends React.Component<HelpPageProps, {}> {
  render() {
    return (
      <div className="Help-Page">
        <Header title="Help" />
        <p>
          We provide you three ways to get results: <br />
          Camera(Recommended): Point your camera to the trash to get real-time
          result <br />
          Text: Type in the trash name to find the right category <br />
          Voice: Press the microphone icon in the search bar and speak out the
          trash name clearly <br />
          Common recycling symbols in the Unites States(add several pictures
          below): <br />
          Placeholder for images here
        </p>
      </div>
    );
  }
}

export default HelpPage;
