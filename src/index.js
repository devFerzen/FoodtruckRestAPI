import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';

//inicializar app
let app = express();
app.server = http.createServer(app);

//Configure bodyParser to add data from the body
app.use(bodyParser.urlencoded({
  extended:true,
  limit:config.bodyLimit
}));
app.use(bodyParser.json());

//middleware

//passportConfig

//Mandar todas las url /v1 a la carpeta routes
app.use('/v1',routes);
app.server.listen(config.port);
console.log('Start on port ' + app.server.address().port);

//exporting this app as default
export default app;
