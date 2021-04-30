import React, { useState } from 'react'

type Props = { 
  saveCar: (e: React.FormEvent, formData: ICar | any) => void 
}

const AddCar: React.FC<Props> = ({ saveCar: saveCar }) => {
  const [formData, setFormData] = useState<ICar | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveCar(e, formData)}>
      <div>
        <div className='sm'>
          <label htmlFor='make'>Make</label>
          <input onChange={handleForm} type='text' id='make' />
        </div>
        <div className='sm'>
          <label htmlFor='modelo'>Model</label>
          <input onChange={handleForm} type='text' id='modelo' />
        </div>
        <div>
          <label htmlFor='image'>Image Url</label>
          <input onChange={handleForm} type='text' id='image' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
        <div className='sm'>
          <label htmlFor='estimatedate'>Estimated Date</label>
          <input onChange={handleForm} type='text' id='estimatedate' />
        </div>
        <div>
          <label htmlFor='estimateperson'>Estimated Person</label>
          <input onChange={handleForm} type='text' id='estimateperson' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Car</button>
    </form>
  )
}

export default AddCar
