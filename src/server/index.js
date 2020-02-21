const express = require('express');

const app = express();

app.use(express.static('webpack-build'));
app.get('/api/getProjectName', (req, res) => res.send({ projectName: 'SmartRecycle' }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
