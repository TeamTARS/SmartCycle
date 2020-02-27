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
            <li>
              <p>Camera</p>
              <p>Placeholder for toggle</p>
            </li>
            <li>
              <p>Microphone</p>
              <p>Placeholder for toggle</p>
            </li>
          </ul>
        </div>
        <div className="Settings-Display">
          <h3>Display</h3>
          <ul>
            <li>
              <p>Dark Mode</p>
              <p>Placeholder for toggle</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SettingsPage;
