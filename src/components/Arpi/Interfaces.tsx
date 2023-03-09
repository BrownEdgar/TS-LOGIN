export interface IProducrs {
    category: string,
    description: string,
    id: number,
    image: string,
    price: string,
    rating:{
      count?: number,
      rate?: number,
    }
    title?: string,

  }