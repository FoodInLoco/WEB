import { handleErrors } from "../errors/errorHandler";
import api from "./api";

export async function getAllRestaurants() {
  try {
    const response = await api.get("/Restaurant")
    return response.data;
  }
  catch (error: any) {
    handleErrors(error)
  }
}

export async function getReservationByUser(data: any) {
  try {
    const response = await api.get("/Reservation/get-by-user", {
      params: data
    })
    return response.data;
  }
  catch (error: any) {
    handleErrors(error)
  }
}


export async function getRestaurantById(id: string | undefined) {
  try {
    const response = await api.get(`/Restaurant/get-by-id?id=${id}`)
    return response.data;
  }
  catch (error: any) {
    handleErrors(error)
  }
}

export async function createReservation(payload: {
  restaurantId?: string,
  seatQuantity: number,
  date: any,
  description: string
}) {
  try {
    const response = await api.post(`/Reservation`, payload)
    return response.data;
  }
  catch (error: any) {
    return handleErrors(error)
  }
}

export async function createRestaurant(payload: any) {
  try {
    const response = await api.post(`/Restaurant`, payload)
    return response.data;
  }
  catch (error: any) {
    return handleErrors(error)
  }
}