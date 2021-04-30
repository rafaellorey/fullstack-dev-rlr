import React, { useEffect, useState } from 'react'
import CarItem from './components/CarItem'
import AddCar from './components/AddCar'
import { getCars, addCar, updateCar, deleteCar } from './API'

const App: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([])

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = (): void => {
    getCars()
    .then(({ data: { cars } }: ICar[] | any) => setCars(cars))
    .catch((err: Error) => console.log(err))
  }

 const handleSaveCar = (e: React.FormEvent, formData: ICar): void => {
   e.preventDefault()
   addCar(formData)
   .then(({ status, data }) => {
    if (status !== 201) {
      throw new Error('Error! Car not saved')
    }
    setCars(data.cars)
  })
  .catch((err) => console.log(err))
}

  const handleUpdateCar = (car: ICar): void => {
    updateCar(car)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Car not updated')
        }
        setCars(data.cars)
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteCar = (_id: string): void => {
    deleteCar(_id)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Car not deleted')
        }
        setCars(data.cars)
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>Cars</h1>
      <AddCar saveCar={handleSaveCar} />
      {cars.map((car: ICar) => (
        <CarItem
          key={car._id}
          updateCar={handleUpdateCar}
          deleteCar={handleDeleteCar}
          car={car}
        />
      ))}
    </main>
  )
}

export default App
