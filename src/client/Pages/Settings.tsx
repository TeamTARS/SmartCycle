import React from "react";

import Header from "./CommonComponents/Header";

export interface SettingsPageProps {
  test: string;
}

class SettingsPage extends React.Component<SettingsPageProps, {}> {
  render() {
    return (
      <div className="Settings-Page">
        <Header title="Settings" />
        <div className="Settings-System-Permissions">
          <h3>System Permissions</h3>
          <ul>
            {/* <Divider /> */}
            <li>
              <p>Camera</p>
              {/* <Divider orientation="vertical" /> */}
              <p>Placeholder for toggle (Switch component)</p>
            </li>
            {/* <Divider /> */}
            <li>
              <p>Microphone</p>
              {/* <Divider orientation="vertical" /> */}
              <p>Placeholder for toggle (Switch component)</p>
            </li>
            {/* <Divider /> */}
          </ul>
        </div>
        <div className="Settings-Display">
          <h3>Display</h3>
          <ul>
            {/* <Divider /> */}
            <li>
              <p>Dark Mode</p>
              {/* <Divider orientation="vertical" /> */}
              <p>Placeholder for toggle (Switch component)</p>
            </li>
            {/* <Divider /> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default SettingsPage;
