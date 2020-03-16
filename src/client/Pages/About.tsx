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
            Team TARS is a team formed at the SAP Academy Of Engineering, aiming
            to prevent the Apocalypse since 2019. <br />
            We aim to make the world a greener place, by educating people how to
            recycle more in a fun and enjoyable way. Help us by being a more
            responsible citizen and making the world greener!
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
