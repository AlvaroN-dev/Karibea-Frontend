
export interface HeroBanner {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  action: string // mujer | hombre | ofertas etc
}


export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  imageUrl: string
}
