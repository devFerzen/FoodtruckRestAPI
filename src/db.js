import mongoose from 'mongoose';
import config from './config';

//Cuando se importe esto conectará a nuestra BD
export default callback => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}
