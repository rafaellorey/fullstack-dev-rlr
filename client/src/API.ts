import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'https://18.191.140.208' //'http://localhost:4000'

export const getCars = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const cars: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/cars'
    )
    return cars
  } catch (error) {
    throw new Error(error)
  }
}

export const addCar = async (
  formData: ICar
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const car: Omit<ICar, '_id'> = {
      make: formData.make,
      modelo: formData.modelo,
      image: formData.image,
      description: formData.description,
      estimatedate: formData.estimatedate,
      estimateperson: formData.estimateperson,
      status: false,
    }
    const saveCar: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-car',
      car
    )
    return saveCar
  } catch (error) {
    throw new Error(error)
  }
}

export const updateCar = async (
  car: ICar
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const carUpdate: Pick<ICar, 'status'> = {
      status: true,
    }
    const updatedCar: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-car/${car._id}`,
      carUpdate
    )
    return updatedCar
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteCar = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedCar: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-car/${_id}`
    )
    return deletedCar
  } catch (error) {
    throw new Error(error)
  }
}
