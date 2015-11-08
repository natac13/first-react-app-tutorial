'use strict';
import fs         from 'fs';
import path       from 'path';
import express    from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});
