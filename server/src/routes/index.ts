import { Router } from 'express'
import { getCars, addCar, updateCar, deleteCar } from '../controllers/cars'
 
const router: Router = Router()

router.get('/cars', getCars)

router.post('/add-car', addCar)

router.put('/edit-car/:id', updateCar)

router.delete('/delete-car/:id', deleteCar)

export default router
