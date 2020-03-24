import React from "react";

import Header from "./CommonComponents/Header";

class AboutPage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="About-Us-Page">
        <Header title="About Us" />
        <div className="Utils-Spacing">
          <h3 className="Title-Center">Meet Team TARS</h3>
          {/* <p>Placeholder for Academy Logo</p> */}
          <p className="About-Us-Description">
            We are Team TARS, a team formed at the SAP Academy Of Engineering
            with a goal of preventing the Apocalypse. We aim to make the world a
            greener place by educating people on how to recycle by providing an
            easy to use application while also helping companies enact greener
            policies. Let's make the world a greener, more inhabitable place for
            us and all future generations together!
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
