import React from 'react'

type Props = CarProps & {
    updateCar: (car: ICar) => void
    deleteCar: (_id: string) => void
}

const Car: React.FC<Props> = ({ car: car, updateCar: updateCar, deleteCar: deleteCar }) => {
  const checkCar: string = car.status ? `line-through` : ''
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1 className={checkCar}>{car.make}</h1>
        <h2 className={checkCar}>{car.modelo}</h2>
        <span className={checkCar}>{car.description}</span>
      </div>
      <div className='Card--image'>
        <img src={car.image} />
      </div>
      <div className='Card--estimate'>
        <h3 className={checkCar}>{car.estimatedate}</h3>
        <h4 className={checkCar}>{car.estimateperson}</h4>
      </div>
      <div className='Card--button'>
        <button
          onClick={() => updateCar(car)}
          className={car.status ? `hide-button` : 'Card--button__done'}
        >
          Complete
        </button>
        <button
          onClick={() => deleteCar(car._id)}
          className='Card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Car
