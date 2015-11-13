import fs         from 'fs';
import path       from 'path';
import express    from 'express';
import bodyParser from 'body-parser';
var app = express();


app.set('port', (process.env.PORT || 3001));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}....`);
});