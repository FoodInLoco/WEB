export { };

declare global {

  interface IRestaurantProps {
    id?: string
  createdAt: string
  lastUpdatedAt: any
  userId: string
  companyName: string
  tradingName: string
  email: string
  ddd: string
  phoneNumber: string
  state: string
  city: string
  zipCode: string
  street: string
  number: number
  complement: string
  kids: boolean
  photo: string
  status: number
  user: User
  menus: Menu[]
  reservations: any[]
  reviews: any[]
  attractions: Attraction[]
}

export interface User {
  id: string
  createdAt: string
  lastUpdatedAt: any
  firstName: string
  lastName: string
  email: string
  ddd: string
  phoneNumber: string
  password: any
  roles: number
  photo: any
  restaurants: any
  reservations: any
}

export interface Menu {
  id?: string
  createdAt: string
  lastUpdatedAt: any
  restaurantId: string
  name: string
  description: string
  photo?: string
  auth?:string
  initialDate: string
  expirationDate: any
  happyHour: boolean
  startAt: string
  endAt: string
  status: number
  items: Item[]
}

export interface Item {
  id: string
  createdAt: string
  lastUpdatedAt: any
  menuId: string
  name: string
  description: string
  photo: any
  quantity: number
  value: number
  status: number
}

export interface Attraction {
  id: string
  createdAt: string
  lastUpdatedAt: any
  restaurantId: string
  name: string
  description: string
  photo: string
  date: string
  coverTax: number
  status: number
}



}
