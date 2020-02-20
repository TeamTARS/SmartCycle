import React, { useState, useEffect } from 'react';
import './app.css';
import LogoImage from './logo.png';

export const App = React.memo(() => {
    const [projectName, setProjectName] = useState();

    useEffect(() => {
        fetch('/api/getProjectName')
        .then(res => res.json())
        .then(data => setProjectName(data.projectName));
    });

    return (
        <div>
            {projectName ? <h1>{`${projectName}`}</h1> : <h1>Loading.. please wait!</h1>}
            <img src={LogoImage} alt="logo" />
        </div>
    );
});
