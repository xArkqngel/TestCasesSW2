const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
	res.send('pong');
}
);

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

export default app; // add this line
