interface ICar {
    _id: string
    make: string
    modelo: string
    image: string
    description: string
    estimatedate: string
    estimateperson: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

type CarProps = {
    car: ICar
}

type ApiDataType = {
    message: string
    status: string
    cars: ICar[]
    car?: ICar
  }
  