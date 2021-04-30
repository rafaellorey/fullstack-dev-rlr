import { Document } from 'mongoose'

export interface ICar extends Document {
    make: string
    modelo: string
    image: string
    description: string
    estimatedate: string
    estimateperson: string
    status: boolean
}