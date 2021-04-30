import { Response, Request } from 'express'
import { ICar } from '../../types/car'
import Car from '../../models/car'

const getCars = async (req: Request, res: Response): Promise<void> => {
    try {
        const cars: ICar[] = await Car.find()
        res.status(200).json({ cars: cars })
    } catch (error) {
        throw error
    }
}

const addCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ICar, 'make' | 'modelo' | 'image' | 'description' | 'estimatedate' | 'estimateperson' | 'status'>

        const car: ICar = new Car({
            make: body.make,
            modelo: body.modelo,
            image: body.image,
            description: body.description,
            estimatedate: body.estimatedate,
            estimateperson: body.estimateperson,
            status: body.status,
        }) 

        const newCar: ICar = await car.save()
        const allCars: ICar[] = await Car.find()

        res.status(201).json({ message: 'Car added', car: newCar, cars: allCars })
    } catch (error) {
        throw error
    }
}

const updateCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateCar: ICar | null = await Car.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allCars: ICar[] = await Car.find()
        res.status(200).json({
            message: 'Car updated',
            car: updateCar,
            cars: allCars,
        })
    } catch (error) {
        throw error
    }
}

const deleteCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedCar: ICar | null = await Car.findByIdAndRemove(
            req.params.id
        )
        const allCars: ICar[] = await Car.find()
        res.status(200).json({
            message: 'Car deleted',
            car: deletedCar,
            cars:allCars,
        })
    } catch (error) {
        throw error
    }
}

export { getCars as getCars, addCar as addCar, updateCar as updateCar, deleteCar as deleteCar }
