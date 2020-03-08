import mongoose from 'mongoose';
import {Router} from 'express';
import FoodTruck from '../model/foodTruck';
import Review from '../model/review';

export default({config,db}) => {
  let api = Router();

  api.post('/add', (req,res) => {
    let newfoodTruck = new FoodTruck();
    newfoodTruck.name = req.body.name;
    newfoodTruck.foodType = req.body.foodType;
    newfoodTruck.cost = req.body.cost;
    newfoodTruck.geometry.coordinates = req.body.geometry.coordinates;
    
    newfoodTruck.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({'message':'FoodTruck save successfully'});
    });
  });

  api.get('',(req,res) => {
    FoodTruck.find({},function(err,foodTrucks) {
      if (err) {
        res.send(err);
      }
      res.json(foodTrucks);
    });
  });

  api.get('/:foodTruck_id',(req,res) => {
    FoodTruck.findById(req.params.foodTruck_id,(err,foodTruck) => {
      if(err){ res.send(err) }
      res.json(foodTruck);
    });
  });

  api.put('/:foodTruck_id',(req,res) => {
    FoodTruck.findById(req.params.foodTruck_id, (err, foodTruck) => {
      if (err) {
        res.send(err);
      }
      foodTruck.name = req.body.name;
      foodTruck.save( err => {
        if (err) {
          res.send(err);
        }
        res.json({"message":"FoodTruck successfully updated!"});
      });
    });
  });

  api.delete('/:foodTruck_id',(req,res) => {
    FoodTruck.remove({_id:req.params.foodTruck_id}, (err,foodTruck) => {
      if (err) {
        res.send(err);
      }
      res.json({"message":"FoodTruck successfully deleted!"});
    });
  });

  return api;
}
