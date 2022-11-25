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
  date: string,
  description: string
}) {
  try {
    const response = await api.post(`/Reservation`, payload)
    return response.data;
  }
  catch (error: any) {
    handleErrors(error)
  }
}
