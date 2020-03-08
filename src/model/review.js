import mongoose from 'mongoose';
import FoodTruck from './foodTruck';
let Schema = mongoose.Schema;

let ReviewSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  message: String,
  foodTruck: {
        type: Schema.Types.ObjectId,
        ref: 'FoodTruck',
        require: true
      }
});

module.exports = mongoose.model('Review',ReviewSchema);
