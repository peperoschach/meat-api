import * as mongoose from 'mongoose'
import { User } from './../users/users.model';
import { Restaurant } from './../restaurants/restaurants.model';


export interface Review extends mongoose.Document {
  date: Date,
  raiting: number,
  comments: string,
  restaurant: mongoose.Types.ObjectId | Restaurant,
  user: mongoose.Types.ObjectId | User ,
}

const reviewSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  raiting: {
    type: Number,
    required: true
  },
  comments: {
    type: String,
    required: true,
    maxlengt: 500
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

})

export const Review = mongoose.model<Review>('Review', reviewSchema)