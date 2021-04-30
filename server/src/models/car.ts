import { ICar } from '../types/car';
import { model, Schema } from 'mongoose'

const carSchema: Schema = new Schema({
    make: {
        type: String,
        required: true
    },
    modelo: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    estimatedate: {
      type: String,
      required: false
    },
    estimateperson: {
      type: String,
      required: false
    },
    status: {
        type: Boolean,
        required: true
    }

}, { timestamps: true })


export default model<ICar>('Car', carSchema)